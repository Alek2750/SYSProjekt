package entity;

import entity.Role;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

<<<<<<< HEAD
@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2018-12-06T12:52:01")
=======
@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2018-12-07T11:23:34")
>>>>>>> 5ca5a1129470ad20bdca6b59a2bbea05427665a1
@StaticMetamodel(User.class)
public class User_ { 

    public static volatile SingularAttribute<User, String> userPass;
    public static volatile SingularAttribute<User, String> userName;
    public static volatile ListAttribute<User, Role> roleList;

}