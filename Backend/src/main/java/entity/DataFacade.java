package entity;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import exceptions.AuthenticationException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author lam@cphbusiness.dk
 */
public class DataFacade {

    //Default EntityManagerFactory
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
    private static final DataFacade instance = new DataFacade();

    private DataFacade() {
    }

    public static DataFacade getInstance() {
        return instance;
    }

    public List<Housing> getAllHousing() {
        EntityManager em = emf.createEntityManager();
        List<Housing> h = new ArrayList();
        try {
            em.getTransaction().begin();
            h = em.createNamedQuery("Housing.findAll").getResultList();
            em.getTransaction().commit();
            return h;
        } finally {
            em.close();
        }
    }
    
    public Housing deleteHousing (int id) {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            Housing h = em.find(Housing.class, id);
            em.remove(h);
            em.getTransaction().commit();
            return h;
        } finally {
            em.close();
        }
    }

    public List<Housing> EditHousing() {
        EntityManager em = emf.createEntityManager();
        List<Housing> h = new ArrayList();
        try {
            em.getTransaction().begin();
            h = em.createNamedQuery("Housing.findAll").getResultList();
            em.getTransaction().commit();
            return h;
        } finally {
            em.close();
        }
    }
}
