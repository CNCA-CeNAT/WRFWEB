import java.io.*;
import javax.naming.NamingException;
import javax.servlet.*;
import javax.servlet.http.*;

public class LDAPServlet extends HttpServlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		// Set response content type
		response.setContentType("text/javascript");//application/json asi estaba
		response.setCharacterEncoding("UTF-8");
		
		PrintWriter out = response.getWriter();
		
		//arreglo de los datos que se reciben
		String datos = "";
				
		//se utiliza BR para leer los diferentes datos del request, se almacenan en un arreglo para su uso
		BufferedReader br = request.getReader();//new BufferedReader(new InputStreamReader(request.getInputStream()));
	        String json = "";
	        while((json = br.readLine()) != null)
		{
	            datos += json;
	        }

		String[] pars = datos.split("&");

		
			//-------------------------------------------
	        String server="ldap://localhost:389"; // servidor de LDAP
	        String usuario=pars[0];//request.getParameter("username"); // Usuario de Autenticacion 
	        String dn="cn=" + usuario + ",dc=cenat,dc=ac,dc=cr"; // Ruta del Arbol LDAP
	        String tipoAth="simple";//tipo de autentuicacion simple o por SSL
	        String clave=pars[1];//request.getParameter("password"); 
	 	
	        ldapAuth ldapAuth=new ldapAuth(server,dn,tipoAth,usuario,clave);
	 
	 	if(ldapAuth.isAutenticado()){
		 	out.println("autenticado"); //"{ mensaje : 'autenticado' }"
		 	out.flush();
	       	}
		else{
			out.println("error");//"{mensaje : 'error, no se pudo autenticar' }"
			out.flush();
		}

		//out.println("DATA: " + datos);
	}
}
