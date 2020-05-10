<?php
  
  if(isset($_POST['submit_user'])) {

    $to = "sales@macavv.com";
    $subject = substr($_POST['query'],20);
    $message = "<p> Name: ".$_POST['user_name']."</p>";
    $message .= "<p> Email :".$_POST['user_email']."</p>";    
    $message .= "<p> Contact No : ".$_POST['contact_no']."</p>";    
    $message .= "<p> Query : ".$_POST['query']."</p>";    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: '. $_POST['user_email'] . "\r\n";
    //$headers .= 'Cc: myboss@example.com' . "\r\n";

    mail($to,$subject,$message,$headers);
  }

 ?>

<?php include('inc/header.php'); ?>

      <main role="main" id="contact_main">          
           <div class="jumbotron">
              <h3 class="text-center">Contact Us</h3>
           </div>
          <div class="container">
            
            <section class="all_Layers">
               <div class="row">                    
                  <div class="col-md-6">
                     <form method="POST" action="<?= $_SERVER['PHP_SELF']?>" id="userform">
                      <div class="form-group">
                        <label for="user_name">Name</label>
                        <input type="text" name="user_name" id="user_name" class="form-control" required>
                      </div>
                      <div class="form-group">
                        <label for="user_email">Email address</label>
                        <input type="email" class="form-control" name="user_email" id="user_email" aria-describedby="emailHelp" required>
                      </div>
                      <div class="form-group">
                        <label for="user_name">Contact No.</label>
                        <input type="text" name="contact_no" id="contact_no" class="form-control" required>
                      </div>
                      <div class="form-group">
                        <label for="query">Query</label>
                        <textarea class="form-control" name="query" id="query" rows="3" required></textarea>
                      </div>                        
                      <button type="submit" name="submit_user" id="submit_user" class="btn btn-primary">Submit</button>
                    </form>
                  </div> 
                  <div class="col-md-6 mt-4">
                      <h3 style="color: #f3a83c">Get In Touch With Us</h3>
                      <div class="get_in_touch mt-4">
                        <p><b>Name:</b> Shashank B.V.</p>
                        <p><b>Contact No:</b> 9986506966</p>
                        <p><b>Email Id:</b> shashank@macavv.com</p>
                        <p><b>Mumbai:</b> 738, Ijmima Complex, 
                        Behind Infinity 2 mall, Off link road
                        Malad West, Mumbai 400064</p>
                        <p><b>Bangalore:</b> 330/13, III main, 
						Domlur layout, Domlur, 
						Bangalore - 560071</p>
                      </div>
                  </div>                   
               </div>              
          </section>

         </div>

      </main>
<?php include('inc/footer.php');?>