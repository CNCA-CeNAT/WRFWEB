import java.io.File;
import java.io.IOException;
import java.util.Arrays;

public class Proyectos {
	
	public Proyectos(){
		
	}
	//se define que la forma de enviar los datos va a ser un strin y & va a ser el separador de parametros
	
	//ruta absoluta donde se va a encotrar el workspace
	public String workspace = "/home/tomcat/webapps/interfazWRF/userWorkspace/";//completar 
	public String out = "";
	
	public String crearCarpetaUsuario(String nombre) throws IOException{              
        File carpetaUsuario = new File(workspace+nombre);
        if(carpetaUsuario.exists()){
        	out = workspace+carpetaUsuario.getName();
        }
        else{
            carpetaUsuario.mkdir(); 
            out = carpetaUsuario.getName();
            
        }
        return out; 
	}
	
	public String crearCarpetaProyecto(String nombre, String nombreProyecto){
		String usuario=workspace+nombre;
		File carpetaUsuario = new File(workspace+nombre);
		File carpetaProyecto = new File(usuario+"/"+nombreProyecto);
		if(carpetaUsuario.exists()){
			if(carpetaProyecto.exists()){
				out = "la carpeta ya existe";            
			}
			else{
				carpetaProyecto.mkdir();
				out = "se creo exitosamente";
			}
        
		}
		else{       
			out = "no existe la carpeta usuario";
		}
		return out;   
	}

	public String eliminarProyecto(String nombre, String nombreProyecto){
		String usuario=workspace+nombre;
		File carpetaUsuario = new File(workspace+nombre);
		File carpetaProyecto = new File(usuario+"/"+nombreProyecto);
		if(carpetaUsuario.exists()){
			if(carpetaProyecto.exists()){
				carpetaProyecto.delete();
				out = "se elimino exitosamente "+ carpetaProyecto.getName();
			}
			else{
				out = "no se pudo eliminar";
			}
        
		}
		else{       
			out = "no existe la carpeta";
		}
		return out;
	}

	public String eliminarUsuario(String nombre){               
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
	//[{nombre: "mi primer proyecto", descripcion: "probando el sistema"},
	
	public String listarProyectos(String nombre){ //nombre carpeta usuario                
		File carpetaUsuario = new File(workspace+nombre); //agregar +nombre
		if(carpetaUsuario.exists()){
			
			//lista que devuelve un arreglo con los nombres
			String[] salida = carpetaUsuario.list();
			int largo = salida.length-1;
			//construccion del string necesario para el front 
			out = "\"[";
			for(int i=0; i<=largo ;i++){
				out +="{nombre: "+salida[i]+", descripcion: "+"alguna descripcion"+"},";
			}
			out += "]\"";
			//out = Arrays.toString(carpetaUsuario.list());
			//System.out.println(Arrays.toString(carpetaUsuario.list()));	
		}
		else{
			out = "carpeta no existe";
		}
		return out; //retorna en un string los proyectos
	}
}//final
