import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AdmiProyeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//se instancia un objeto de la clase Proyectos 
		Proyectos p1 = new Proyectos();
		
		PrintWriter out = response.getWriter();
		
		String datos = "";//request.getParameter("param");
		
			
		//se utiliza BR para leer los diferentes datos del request, se almacenan en un arreglo para su uso
		BufferedReader br = request.getReader();//new BufferedReader(new InputStreamReader(request.getInputStream()));
	        String json = "";
	        while((json = br.readLine()) != null)
	        {
	            datos += json;
	        }
	       
	    //arreglo que contiene los parametros
		String[] pars = datos.split("&");
		
		//los posibles parametros de funcion serían: nuevo, eliminar, lista, 
		
		//Contiene siempre el comando que se va a ejecutar 
		String comand = pars[0];
		
		
		if(comand.equals("nuser")){
			String salida = p1.crearCarpetaUsuario(pars[1]);
			out.println("ruta:"+salida);
			
		}else if(comand.equals("dproj")){
			String salida = p1.eliminarProyecto("admin", pars[1]);
			out.println("msj:"+salida);
			
		}else if(comand.equals("listar")){
			String salida = p1.listarProyectos(pars[1]);
			out.println(salida);
			
		}else if (comand.equals("nproj")){
			String salida = p1.crearCarpetaProyecto("admin", pars[1]);
			out.println("msj:"+salida);
		}
		
	}

}
