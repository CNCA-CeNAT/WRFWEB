package ldapAuth;
import javax.naming.NamingException;
import javax.naming.directory.Attribute;

import ldapAuth.ldapAuth;

public class main {

	public static void main(String[] args) throws NamingException {
		
		System.out.println("Iniciando Autenticacion");
        
        String server="ldap://localhost:389"; // servidor de LDAP
        String usuario="admin"; // Usuario de Autenticacion
        String dn="cn=" + usuario + ",dc=cenat,dc=ac,dc=cr"; // Ruta del Arbol LDAP
        String tipoAth="simple";//tipo de autentuicacion simple o por SSL
        String clave="LD4P_cenat";
 
        ldapAuth ldapAuth=new ldapAuth(server,dn,tipoAth,usuario,clave);
 
 if(ldapAuth.isAutenticado()){
	 System.out.println("Usuario "+ldapAuth.getUsuario()+" Autenticado Correctamente");
            
            /* obtenemos una Propiedad de la autenticacion
             *
             * Algunas Propiedades Disponibles
             * mailLocalAddress,displayName,givenName,objectClass,userPassword,sambaLogonTime,mail
             * uid,uidNumber,cn,loginShell,gidNumber,gecos,sambaSID,homeDirectory
             */
          // Attribute atr=ldapAuth.cargarPropiedadConexion("mail");
        //  System.out.println("1. Atributo "+atr.getID());
        //  System.out.println("1. Valor "+atr.get().toString());
       }
       else{
          System.out.println("Usuario "+ldapAuth.getUsuario()+" No se Puedo Autenticar");
       }

	}

}
