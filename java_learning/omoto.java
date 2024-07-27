public class omoto {
   public static void main(String[] args) {
    
   } 
}

//1
class ContactApi{
    @Autowired 
    ContactController contactController;
    @GetMapping()
    public Contact getbyId(String id){
        contactController.getById(id);   
    }
}

//2
class ContactController{
    @Autowired
    ContactService contactService;
    public Contact getById(String id){
        return contactService.getById(id);
    }
}

//3
interface  ContactService{
    public void getById(Contact contact);
}

//4
class ContactServiceImp implements ContactService{
    @Autowired
    ContactRepositry contactRepositry;
    @Override
    void getById(Contact contact){

    }
}

//5

class ContactRepositry{
    @Autowired
    ContactJPARepositry contact ;
    contact.getMethod();
}

//6
interface ContactJPARepositry extends  JPARepository<Contact , Long>{

}