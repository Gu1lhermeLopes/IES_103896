package rest.api;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Show {

	private @Id @GeneratedValue int id;
	private String name;
	private ArrayList<String> quotes;


	public Show(String name, ArrayList<String> quotes) {
		this.name = name;
		this.quotes = quotes;
	}
	public Show(String name) {
		this.name = name;
		this.quotes=new ArrayList<String>();
	}
	Show() {}

	public ArrayList<String> getQuotes() {
		return quotes;
	}

	public int getQuoteslen() {
		return quotes.size();
	}
	public String getOneQuote(int i) {
		return quotes.get(i);
	}
	public void addQuotes(String q){
		quotes.add(q);
	}
	


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}




	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((quotes == null) ? 0 : quotes.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Show other = (Show) obj;
		if (id != other.id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (quotes == null) {
			if (other.quotes != null)
				return false;
		} else if (!quotes.equals(other.quotes))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Show [id=" + id + ", name=" + name +"]";
	}





	
}