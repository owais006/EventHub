import React from 'react'
import wedding from './../wedding.jpg';
import birth from './../birth.jpg';
import eng from './../eng.jpg';

export default function Service(props) {
    return (
      <section id="service">
      <div className="container">
        <header className="section-header">
          <h3>Services</h3>
         </header>
        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            <p>
             <h1>Birthday</h1> </p>
            <div className="icon-box wow fadeInUp">
              <div className="icon"><i className="fa fa-shopping-bag"></i></div>
              {/* <h4 className="title"><a href="#">Birthday</a></h4> */}
              <p className="description">Birthday parties are a great boost to any child's self-esteem. Making them feel like kings (or queens) for the day is one of the best (and most lasting) gifts you can give them. But where and how should you start?
              Theme
              Many parents feel more comfortable starting with a theme around which they can organize invitations, decorations, games, crafts and food. Both you and your child will enjoy making plans that reflect her interests — whether it's a sports theme, a dinosaur bash, an art party, a backyard beach picnic, a trip back in time, or an animal adventure.
              Place</p> </div>
          </div>
          <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src={birth} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp">
          <img src={wedding} className="d-block w-100" alt="..."/>
          
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <br/>
            <h1>WEDDING</h1>
            <p>
              The people who make up the wedding party the bride and groom, the bridesmaids and groomsmen, the flower girl and ring bearer, or the father and mother of the bride are basically the MVPs of the big day. Get bridal party fashion advice, etiquette tips, gift ideas, and more.
              <br/> 
              In dreams and in love there are no impossibilities.” “A successful marriage requires falling in love many times, always with the same person.” “A good marriage is one which allows for change and growth in the individuals and in the way they express their love.” “The greatest marriages are built on teamwork.
              </p>
            <p>
            </p>
          </div>
        </div>
        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
          <img src={eng} className="d-block w-100" alt="..."/>
          </div>
          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <br/>
            <h1>ENGAGEMENT</h1>
            <p>
            The greatest thing you'll ever learn is just to love and be loved in return.  Eden Ahbez.<br/>
            You come to love not by finding the perfect person, but by seeing an imperfect person perfectly.”Anonymous.<br/>
            Say congratulations to a loved one on their engagement with a special message that feels unique and personal.<br/> Whether you're sending an engagement card to a friend or family member, your message should always include your<br/> warm wishes for the couple as they begin this new chapter in life together. If you're worried about finding the <br/>perfect words to say, we have you covered with valuable tips on what to write in an engagement card, so you can<br/> shower the br/ide and groom with love.</p>
          </div>
        </div>
      </div>
    </section>
    )
}
