import java.io.File;
import java.io.IOException;
import java.util.Arrays;

public class Proyectos {
	
	//se define que la forma de enviar los datos va a ser un strin y & va a ser el separador de parametros
	
	//ruta absoluta donde se va a encotrar el workspace
	public String workspace = "/home/tomcat/webapps/interfazWRF/userWorkspace";//completar 
	public String out = "";
	
	public String crearCarpetaUsuario(String nombre) throws IOException{
        //String workspace= "/home/brucce/Documentos/";  SOLO REFERENCIA              
        File carpetaUsuario = new File(workspace+nombre);
        if(carpetaUsuario.exists()){
        	out = carpetaUsuario.getName();//almacena la direccion de la carpeta en una variable 
            //System.out.println(carpetaUsuario.getName());
        }
        else{
            carpetaUsuario.mkdir(); 
            out = carpetaUsuario.getName();
            //System.out.println("Se creo el directorio");
        }
        return out; //cambio el metodo a Strig, para que retorne la dirección
	}
	
	public void crearCarpetaProyecto(String nombre, String nombreProyecto){
		//String workspace = "/home/brucce/Documentos/"; SOLO REFERENCIA
		String usuario=workspace+nombre;
		File carpetaUsuario = new File(workspace+nombre);
		File carpetaProyecto = new File(usuario+"/"+nombreProyecto);
		if(carpetaUsuario.exists()){
			if(carpetaProyecto.exists()){
				System.out.println("La carpeta: "+carpetaProyecto.getName()+" ya existe");            
			}
			else{
				carpetaProyecto.mkdir();
				System.out.println("Se creo la carpeta del proyecto");
			}
        
		}
		else{       
			System.out.println("No se encuentra la carpeta del usuario creada");
		}   
	}

	public void eliminarProyecto(String nombre, String nombreProyecto){
		//String workspace = "/home/brucce/Documentos/";SOLO REFERENCIA
		String usuario=workspace+nombre;
		File carpetaUsuario = new File(workspace+nombre);
		File carpetaProyecto = new File(usuario+"/"+nombreProyecto);
		if(carpetaUsuario.exists()){
			if(carpetaProyecto.exists()){
				carpetaProyecto.delete();
				out = carpetaProyecto.getName();
				//System.out.println("Se elimino la carpeta: "+ carpetaProyecto.getName());
			}
			else{
				System.out.println("No se encuentra la carpeta: "+ carpetaProyecto.getName());
			}
        
		}
		else{       
			System.out.println("No se encuentra la carpeta del usuario creada");
		}
	}

	public String eliminarUsuario(String nombre){
		//String workspace= "/home/brucce/Documentos/";SOLO REFERENCIA                
		File carpetaUsuario = new File(workspace+nombre);
		if(carpetaUsuario.exists()){
			carpetaUsuario.delete();
			out = carpetaUsuario.getName();
			//System.out.println("Se elimino la carpeta del usuario: "+carpetaUsuario.getName());
		}
		else{
			System.out.println("No se encuentra la carpeta del usuario: "+ carpetaUsuario.getName());
		}
		return out; //retorna direccion despues de eliminada
	}
	 
	//esta funcion debe retornar un arreglo de json 
	//[{nombre: "miproyecto"},{...},{...}
	//]
	public String listarProyectos(String nombre){
		//String workspace= "/home/brucce/Documentos/";SOLO REFERENCIA                
		File carpetaUsuario = new File(workspace+nombre);
		if(carpetaUsuario.exists()){
			out = Arrays.toString(carpetaUsuario.list());
			//System.out.println(Arrays.toString(carpetaUsuario.list()));
        
		}
		else{
			System.out.println("El usuario: "+ carpetaUsuario.getName()+ " no existe");
		}
		return out; //retorna en un string los proyectos
	}
}//final
