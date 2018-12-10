package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.DataFacade;
import entity.Housing;
import javax.annotation.security.RolesAllowed;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

/**
 * REST Web Service
 *
 * @author lam@cphbusiness.dk
 */
@Path("info")
public class DemoResource {

    @Context
    private UriInfo context;
    Gson gson = new GsonBuilder().setPrettyPrinting().create();

    @Context
    SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("user")
    @RolesAllowed("user")
    public String getFromUser() {
        String user = securityContext.getUserPrincipal().getName();
        return "\"Hello from USER: " + user + "\"";
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/Housing")
    public String getAllHousing() {
        return gson.toJson(DataFacade.getInstance().getAllHousing());
    }
 
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response putJson(String content, @PathParam("id") int id) {
        Housing h = gson.fromJson(content, Housing.class);
        h.setId(id);
        DataFacade.getInstance().editHousing(h);        
        return Response.ok().entity(gson.toJson(h)).build();
    }

    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteCustomer(@PathParam("id") int id) {
        Housing h = DataFacade.getInstance().deleteHousing(id);       
        return Response.ok().entity(gson.toJson(h)).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("admin")
    @RolesAllowed("admin")
    public String getFromAdmin() {
        String user = securityContext.getUserPrincipal().getName();
        return "\"Hello from ADMIN" + user + "\"";
    }
}
