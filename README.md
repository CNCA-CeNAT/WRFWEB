import java.io.FileReader;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class JsonParser {
	
	private static String jsonFile = "/home/andres/Desktop/example.json";

	public static void main(String[] args) {
		
		try{
			
			FileReader reader = new FileReader(jsonFile);
			JSONObject jsonObject = (JSONObject) new JSONParser().parse(reader);
			
			String nombre = (String) jsonObject.get("pageName");
			System.out.println("El nombre de la pagina es: " + nombre);
			
			String user = (String) jsonObject.get("username");
			System.out.println("Nombre del usuario: " + user);
			
			String pass = (String) jsonObject.get("password");
			System.out.println("Password: " + pass);
			
			JSONArray array = (JSONArray) jsonObject.get("Data");
			
			for (int i=0; i<array.size(); i++){
				System.out.println("La informacion en el arrelo: "+array.get(i)+"\n");
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
