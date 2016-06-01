import java.util.Hashtable;
import javax.naming.Context;
import javax.naming.NamingException;
import javax.naming.directory.Attribute;
import javax.naming.directory.Attributes;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;

public class ldapAuth {

	private String usuario;
    private String clave;
    private String servidor;
    private String dn;
    private String tipoAuth;
    private boolean autenticado;
     
    DirContext dc;
    
    public ldapAuth(String server, String dn, String ta,String usuario,String clave) {
        this.servidor = server;
        this.dn = dn;
        this.tipoAuth = ta;
        this.usuario=usuario;
        this.clave=clave;
        inicializarConexion();
    }
    
    public void inicializarConexion() {
        Hashtable env = new Hashtable();
        env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
        env.put(Context.PROVIDER_URL, servidor);
        env.put(Context.SECURITY_AUTHENTICATION, tipoAuth);
        env.put(Context.SECURITY_PRINCIPAL, dn);
        env.put(Context.SECURITY_CREDENTIALS, clave);
 
        try {
            dc = new InitialDirContext(env);
            setAutenticado(true);
        } catch (NamingException ex) {
            System.out.println("Error Autenticando mediante LDAP, Error causado por : " + ex.toString());
            setAutenticado(false);
        }
    }
    
    public Attribute cargarPropiedadConexion(String atributo) {
        Attribute propiedad = null;
 
        try {
            Attributes attrs = dc.getAttributes(dn);
 
            if (attrs == null) {
                propiedad = null;
            } else {
                propiedad = attrs.get(atributo);
            }
        } catch (Exception e) {
            propiedad = null;
        }
        return propiedad;
    }
    
    /*Get's y Set's*/
    public boolean isAutenticado() {
        return autenticado;
    }
    public void setAutenticado(boolean autenticado) {
        this.autenticado = autenticado;
    }
    public String getUsuario() {
        return usuario;
    }
    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
    


   };


