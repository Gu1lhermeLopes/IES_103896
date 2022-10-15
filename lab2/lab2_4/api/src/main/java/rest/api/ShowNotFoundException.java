package rest.api;

public class ShowNotFoundException extends RuntimeException {

	public ShowNotFoundException(Long id) {
		super("show not found " + id);
	}
}
