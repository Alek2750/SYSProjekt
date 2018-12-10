/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;

/**
 *
 * @author Morten
 */
@Entity
@Table(name = "housing")
@NamedQueries({
    @NamedQuery(name = "Housing.findAll", query = "SELECT h FROM Housing h")
    , @NamedQuery(name = "Housing.findById", query = "SELECT h FROM Housing h WHERE h.id = :id")
    , @NamedQuery(name = "Housing.findBySalesId", query = "SELECT h FROM Housing h WHERE h.salesId = :salesId")
    , @NamedQuery(name = "Housing.findByAddress", query = "SELECT h FROM Housing h WHERE h.address = :address")
    , @NamedQuery(name = "Housing.findByCity", query = "SELECT h FROM Housing h WHERE h.city = :city")
    , @NamedQuery(name = "Housing.findByProptype", query = "SELECT h FROM Housing h WHERE h.proptype = :proptype")
    , @NamedQuery(name = "Housing.findByRooms", query = "SELECT h FROM Housing h WHERE h.rooms = :rooms")
    , @NamedQuery(name = "Housing.findByFuniture", query = "SELECT h FROM Housing h WHERE h.funiture = :funiture")
    , @NamedQuery(name = "Housing.findByAnimals", query = "SELECT h FROM Housing h WHERE h.animals = :animals")
    , @NamedQuery(name = "Housing.findBySize", query = "SELECT h FROM Housing h WHERE h.size = :size")
    , @NamedQuery(name = "Housing.findByFloor", query = "SELECT h FROM Housing h WHERE h.floor = :floor")
    , @NamedQuery(name = "Housing.findByShareable", query = "SELECT h FROM Housing h WHERE h.shareable = :shareable")
    , @NamedQuery(name = "Housing.findByEnergy", query = "SELECT h FROM Housing h WHERE h.energy = :energy")
    , @NamedQuery(name = "Housing.findByPeriod", query = "SELECT h FROM Housing h WHERE h.period = :period")
    , @NamedQuery(name = "Housing.findByRent", query = "SELECT h FROM Housing h WHERE h.rent = :rent")
    , @NamedQuery(name = "Housing.findByDeposit", query = "SELECT h FROM Housing h WHERE h.deposit = :deposit")
    , @NamedQuery(name = "Housing.findByAconto", query = "SELECT h FROM Housing h WHERE h.aconto = :aconto")
    , @NamedQuery(name = "Housing.findByStartperiod", query = "SELECT h FROM Housing h WHERE h.startperiod = :startperiod")
    , @NamedQuery(name = "Housing.findByCreated", query = "SELECT h FROM Housing h WHERE h.created = :created")
    , @NamedQuery(name = "Housing.findBySold", query = "SELECT h FROM Housing h WHERE h.sold = :sold")
    , @NamedQuery(name = "Housing.findByOpenhouse", query = "SELECT h FROM Housing h WHERE h.openhouse = :openhouse")})
public class Housing implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "sales_id")
    private Integer salesId;
    @Size(max = 40)
    @Column(name = "address")
    private String address;
    @Size(max = 30)
    @Column(name = "city")
    private String city;
    @Size(max = 40)
    @Column(name = "proptype")
    private String proptype;
    @Column(name = "rooms")
    private Integer rooms;
    @Column(name = "funiture")
    private Boolean funiture;
    @Column(name = "animals")
    private Boolean animals;
    @Column(name = "size")
    private Integer size;
    @Size(max = 10)
    @Column(name = "floor")
    private String floor;
    @Column(name = "shareable")
    private Boolean shareable;
    @Size(max = 3)
    @Column(name = "energy")
    private String energy;
    @Size(max = 10)
    @Column(name = "period")
    private String period;
    @Column(name = "rent")
    private Integer rent;
    @Column(name = "deposit")
    private Integer deposit;
    @Column(name = "aconto")
    private Integer aconto;
    @Size(max = 20)
    @Column(name = "startperiod")
    private String startperiod;
    @Size(max = 20)
    @Column(name = "created")
    private String created;
    @Column(name = "sold")
    private Boolean sold;
    @Size(max = 20)
    @Column(name = "openhouse")
    private String openhouse;

    public Housing() {
    }

    public Housing(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSalesId() {
        return salesId;
    }

    public void setSalesId(Integer salesId) {
        this.salesId = salesId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProptype() {
        return proptype;
    }

    public void setProptype(String proptype) {
        this.proptype = proptype;
    }

    public Integer getRooms() {
        return rooms;
    }

    public void setRooms(Integer rooms) {
        this.rooms = rooms;
    }

    public Boolean getFuniture() {
        return funiture;
    }

    public void setFuniture(Boolean funiture) {
        this.funiture = funiture;
    }

    public Boolean getAnimals() {
        return animals;
    }

    public void setAnimals(Boolean animals) {
        this.animals = animals;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

    public Boolean getShareable() {
        return shareable;
    }

    public void setShareable(Boolean shareable) {
        this.shareable = shareable;
    }

    public String getEnergy() {
        return energy;
    }

    public void setEnergy(String energy) {
        this.energy = energy;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public Integer getRent() {
        return rent;
    }

    public void setRent(Integer rent) {
        this.rent = rent;
    }

    public Integer getDeposit() {
        return deposit;
    }

    public void setDeposit(Integer deposit) {
        this.deposit = deposit;
    }

    public Integer getAconto() {
        return aconto;
    }

    public void setAconto(Integer aconto) {
        this.aconto = aconto;
    }

    public String getStartperiod() {
        return startperiod;
    }

    public void setStartperiod(String startperiod) {
        this.startperiod = startperiod;
    }

    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    public Boolean getSold() {
        return sold;
    }

    public void setSold(Boolean sold) {
        this.sold = sold;
    }

    public String getOpenhouse() {
        return openhouse;
    }

    public void setOpenhouse(String openhouse) {
        this.openhouse = openhouse;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Housing)) {
            return false;
        }
        Housing other = (Housing) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.Housing[ id=" + id + " ]";
    }
    
}
