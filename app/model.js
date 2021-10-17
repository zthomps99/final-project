var MODEL = (function(){
    var homeContent = `<div class="home">
    <div class="hero">
        <h1>eventsy</h1>
        <p><span>Less important text goes here</p></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
            Fugiat aliquid minus nemo sed est.</p>
        <button>Read More</button>
    </div>
    <div class="ceoQuote">
        <p>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”
        </p>
        <div class="ceoSub">
            <p>John Smith</p>
            <p><span>Corporation CEO, books author.</p></span>
        </div>
    </div>
    <div class="upcomingEvents">
        <div class="eventsHead"><h1>UPCOMING EVENTS:</h1></div>
        <div class="eventWrapper">
        <div class="eventContainer">
            <div class="eventDate">06 <p class="month">JUN</p></div>
            <div class="eventInfo">
                <p>Sed et persipiatis unde omnis iste natus</p>
                <p class="subInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
        </div>
        <div class="eventContainer">
            <div class="eventDate">30 <p class="month">JUL</p></div>
            <div class="eventInfo">
                <p>Sed et persipiatis unde omnis iste natus</p>
                <p class="subInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
        </div>
        <div class="eventContainer">
            <div class="eventDate">30 <p class="month">AUG</p></div>
            <div class="eventInfo">
                <p>Sed et persipiatis unde omnis iste natus</p>
                <p class="subInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
        </div>
        <div class="eventContainer">
            <div class="eventDate">23 <p class="month">NOV</p></div>
            <div class="eventInfo">
                <p>Sed et persipiatis unde omnis iste natus</p>
                <p class="subInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
        </div>
        <div class="eventContainer">
            <div class="eventDate">23 <p class="month">DEC</p></div>
            <div class="eventInfo">
                <p>Sed et persipiatis unde omnis iste natus</p>
                <p class="subInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
        </div>
    </div>
    </div>
</div>`;
    var aboutContent = `<div class="heroWrapper">
    <div class="hero">
        <img src="images/hero/Group 11.png">
        <div class="heroText textBorder">OUR HISTORY:</div>
    </div>
    <div class="heroInfo">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
</div>`;
    var galleryContent = `<div class="galleryWrapper">
    <h1>GALLERY:</h1>
    <div class="row">
        <div class="leftImg"><a href="galleryOne.html"><img src="images/gallery/foodfestival.png"></div>
        <div class="middleImg"><a href="galleryTwo.html"><img src="images/gallery/deejay.png"></div>
        <div class="rightImg"><a href="galleryThree.html"><img src="images/gallery/speech.png"></div>
    </div>
    <div class="row">
        <div class="leftSecondImg"><a href="galleryFour.html"><img src="images/gallery/openfoodfest.png"></div>
        <div class="rightSecondImg"><a href="galleryFive.html"><img src="images/gallery/international.png"></div>
    </div>
</div>`;
    var blogContent = `<div class="blog">
    <div class="blogHeader"><h1>BLOG:</h1></div>
        <div class="blogWrapper">
            <div class="blogContainer">
                <div class="blogDate">06 <p class="month">JUN</p></div>
                <div class="blogImg"><a href="blogOne.html"><img src="images/046d299f261ee2e1362c00bf192aacb6.png"></div>
                <div class="blogInfo">
                    <p>Sed et persipiatis unde omnis iste natus</p>
                    <p class="blogSubInfo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </div>
            </div>
            <div class="blogContainer">
                <div class="blogDate">30 <p class="month">JUL</p></div>
                <div class="blogImg"><a href="blogTwo.html"><img src="images/046d299f261ee2e1362c00bf192aacb6.png"></div>
                <div class="blogInfo">
                    <p>Sed et persipiatis unde omnis iste natus</p>
                    <p class="blogSubInfo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </div>
            </div>
            <div class="blogContainer">
                <div class="blogDate">30 <p class="month">AUG</p></div>
                <div class="blogImg"><a href="blogThree.html"><img src="images/046d299f261ee2e1362c00bf192aacb6.png"></div>
                <div class="blogInfo">
                    <p>Sed et persipiatis unde omnis iste natus</p>
                    <p class="blogSubInfo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </div>
            </div>
            <div class="blogContainer">
                <div class="blogDate">23 <p class="month">NOV</p></div>
                <div class="blogImg"><a href="blogFour.html"><img src="images/046d299f261ee2e1362c00bf192aacb6.png"></div>
                <div class="blogInfo">
                    <p>Sed et persipiatis unde omnis iste natus</p>
                    <p class="blogSubInfo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </div>
            </div>
            <div class="blogContainer">
                <div class="blogDate">23 <p class="month">DEC</p></div>
                <div class="blogImg"><a href="blogFive.html"><img src="images/046d299f261ee2e1362c00bf192aacb6.png"></div>
                <div class="blogInfo">
                    <p>Sed et persipiatis unde omnis iste natus</p>
                    <p class="blogSubInfo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </div>
            </div>
        </div>


</div>`;
    var contactContent = `<div class="contact">
    <div class="contactHeader"><h1>CONTACT:</h1></div>
        <div class="contactWrapper">
            <div class="nameInput">
                <input type="text" placeholder="Your name...">
            </div>
            <div class="emailInput">
                <input type="text" placeholder="Email Address...">
            </div>
            <div class="companyInput">
                <input type="text" placeholder="Company...">
            </div>
            <div class="messageBox">
                <textarea type="text" placeholder="Message..."></textarea>
            </div>
            <div class="map"><img src="images/c9630e6a0d4eea8424c9e77634f917b5.png"></div>
        </div>
            <input class="submitButton" type="submit" value="SEND MESSAGE"/>
</div>`;

var _changePageContent = function (pageName){
    let contentName = pageName + "Content";
    $("#app").html(eval(contentName));

    if(pageName == "home") {
        $("#nav-holder").removeClass("aboutBorder");
        $("#logo").removeClass("aboutLogo");
        $("#links").removeClass("aboutLinks");
        $("#logo").addClass("logo");
    } else {
        $("#nav-holder").addClass("aboutBorder");
        $("#logo").addClass("aboutLogo");
        $("#links").addClass("aboutLinks");
        $("#logo").removeClass("logo");
    }

};

    return {
        changePageContent: _changePageContent,
    };
})();