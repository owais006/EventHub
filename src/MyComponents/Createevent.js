import React from 'react'
export const Createevent = () => {
    return (
        <section id="contact">
        <div class="container-fluid">
            <div class="section-header">
                <h3>Create Event</h3>
            </div>
            <div class="row wow fadeInUp">
                <div class="col-lg-6 offset-lg-3">
                    <div class="form">
                        <form className='create'> 
                                <div class="form-group">
                                <label>Name/Title
                                </label>
                                <input type="text" name="title" required   class="form-control" id="mobile" placeholder="Enetr your name and Title"  />
                                <div class="validation"></div>  
                            </div> 
                            <div class="form-row">
                            <div class="col-lg-6"> 
                                <div class="form-group">
                                <label>Date To
                                </label>
                                <input type="date" name="date_to" class="form-control" id="mobile" placeholder="Your Mobile"  data-validation="length" data-validation-length="min2"/>
                                <div class="validation"></div>
                            </div>
                            </div>
                            <div class="col-lg-6">
                            
                            <div class="form-group">
<label>Date From</label>		
<input type="date" name="date_from" class="form-control" id="email" placeholder="Your Email"  data-validation="length" data-validation-length="min2"/>
                                <div class="validation"></div>
                            </div>
                            </div>
                                
                            </div>
                            <div class="form-row">
                            <div class="col-lg-6">
                            
                                
                                
                             <div class="form-group">
                                <label>Time To</label>
                                <input type="time" name="time_to" class="form-control" id="mobile" placeholder="Your Mobile"  data-validation="length" data-validation-length="min2"/>
                                <div class="validation"></div>
                            </div>
                            </div>
                            <div class="col-lg-6">
                            
                            <div class="form-group">
                            <label>Time From
                            </label>
                                <input type="time" name="time_from" class="form-control" id="email" placeholder="Your Email"  data-validation="length" data-validation-length="min2"/>
                                <div class="validation"></div>
                            </div>
                            </div>
                                
                            </div>
                            <div class="form-group">
                            <label>Entertainments:-</label><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="checkbox" name="music"  value="yes" />Music&nbsp;&nbsp;
                                <input type="checkbox" name="dance"  value="yes" />Dance&nbsp;&nbsp;
                                <input type="checkbox" name="cartoon"  value="yes" />Cartoons
                                <div class="validation"></div>
                            </div>
<div class="form-group">
                            <label>Decoration:-</label><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="checkbox" name="light"  value="yes" />Light&nbsp;&nbsp;
                                <input type="checkbox" name="chair"  value="yes" />Chair&nbsp;&nbsp;
                                <input type="checkbox" name="stage"  value="yes" />Stage&nbsp;&nbsp;
                                <input type="checkbox" name="flower"  value="yes" />Flowers
                                <div class="validation"></div>
                            </div>
<div class="form-group">
                            <label>Food:-</label><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="checkbox" name="veg"  value="yes" />Veg&nbsp;&nbsp;
                                <input type="checkbox" name="nonveg"  value="yes" />Non-Veg&nbsp;&nbsp;
                                <input type="checkbox" name="veg_nonveg"  value="yes" />Veg + Non-Veg&nbsp;&nbsp;
                                <div class="validation"></div>
                            </div>
                            <div class="form-group">
                                    <label>No of Chairs
                                </label>
                                <input type="text" name="no_of_chair" class="form-control" required  id="mobile" placeholder="No. Of Chairs"  />
                                <div class="validation"></div>
                            
                            
                                
                            </div>
                            
                            <div class="form-group">
                                    <label>Address
                                </label>
                                <input type="text" name="address" class="form-control" required  id="mobile" placeholder="Venue Address"  />
                                <div class="validation"></div>
                            
                            
                                
                            </div>
                            <div class="form-group">
                                <label>Contact Details
                                </label>
                                <input type="mobile" name="mobile" class="form-control" required  id="mobile" placeholder="Enter personal ph number / Incharge ph number"  />
                                <div class="validation"></div>
                            
                            
                                
                            </div>
                            <div class="form-group">
                                <label>Email Id
                                </label>
                                <input type="email" name="email" class="form-control" required id="mobile" placeholder="E-mail "  />
                                <div class="validation"></div>
                            
                            
                                
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div class="validation"></div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div class="validation"></div>
                            </div>
                            <div class="text-center"><button type="submit" name="submit" title="Register Now">Register Now</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}