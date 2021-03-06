import React, { Component } from 'react';
import './App.css';
import './main.css';
import slidefoto1 from './images/black-and-white-2.jpg';
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

class Details extends Component {
  render() {
    return (
      <div>
        <section id="detailsbanner" className="align-middle">
          <div className="container">
            <div className="row">
              <div id="carouselExampleIndicators" className="carousel slide"
                data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0"
                    className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={slidefoto1}
                      alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Sitting Room</h5>
                      <p>1200m sq</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={slidefoto1}
                      alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Sitting Room</h5>
                      <p>1200m sq</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={slidefoto1}
                      alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Dinning Area</h5>
                      <p>1200m sq</p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators"
                  role="button" data-slide="prev"> <span
                    className="carousel-control-prev-icon" aria-hidden="true"></span> <span
                      className="sr-only">Previous</span> </a> <a className="carousel-control-next"
                        href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span> </a>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </section>

        <section className="info-details-box-1">
          <div className="container center">
            <div className="row">
              <div className="col-lg-12 col-sm-6 portfolio-item">
                <h4 className="card-title">
                  <a href="/Details/:id">4 værelses villa på 123 m²</a>
                </h4>
                <p className="card-text">Danhaven, 2500 Valby</p>
              </div>
            </div>
          </div>
        </section>


        <div className="container info-details-box-2">

          <div className="row">

            <div className="col-lg-8 portfolio-item">
              <div className="row">
                <div className="col-lg-12 portfolio-item">
                  <h3 className="AdDetail__contents-details-title">Lovely renovated
							villa, in quiet villa area in Valby</h3>
                  <p className="SmartTextContainer__text AdDetail__contents-details-description comment">The
                    house has been renovated regularly. On the ground floor is an
                    entrance hall, a nice bathroom, and a new modern kitchen in open
                    connection to a beautiful living room with floor heating. From
                    here there is access to a cosy winter garden with fireplace and
                    lounge area. On the first floor there is a large bedroom, as well
                    as a large childrens room. In the basement there is another
                    bathroom with bathtub/spa and a large available extra room that
                    can be used as a guest room. Laundry room with washer and dryer.
                    There are newly landscaped terraces on both sides of the house
                    and a beautiful garden. The house is located approx. 7 km from
                    Town hall square / Copenhagen city center. There is also a 5
                    minute walk to beautiful green parkland alongside Harrestrup
							Creek.</p>
                </div>
                <div className="col-lg-6 portfolio-item">


                  <table className="table table-bordered table-striped">
                    <thead className="black white-text">
                      <tr>
                        <th scope="col">Desc</th>
                        <th scope="col">Info</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                        <td>Adresse</td>
                        <td>Details</td>
                      </tr>
                      <tr>

                        <td>Postnummer</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>En beskrivelse</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Boligtype</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Værelser</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Møbleret</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Husdyr tilladt</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Størrelse</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Etage</td>
                        <td>Details</td>

                      </tr>
                    </tbody>
                  </table>


                </div>
                <div className="col-lg-6 portfolio-item">


                  <table className="table table-bordered table-striped">
                    <thead className="black white-text">
                      <tr>

                        <th scope="col">Desc</th>
                        <th scope="col">Info</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                        <td>Delevenlig</td>
                        <td>Details</td>
                      </tr>
                      <tr>

                        <td>Energimærke</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Lejeperiode</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Månedligleje</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Depositum</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Overtagelsedato</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Aconto</td>
                        <td>Details</td>

                      </tr>
                      <tr>

                        <td>Oprettelsesdato</td>
                        <td>Details</td>

                      </tr>

                    </tbody>
                  </table>

                </div>
              </div>
              <center><div className="col-lg-4 portfolio-item contact-landlord">
                <div className="card">
                  <div className="card-header">Kontakt Udlejer</div>
                  <div className="card-body">
                    <h5 className="card-title"><FaPhone/> Telephone</h5>
                    <h5 className="card-title"><FaEnvelope/> Email</h5>
                    <h5 className="card-title"><FaClock/> 2+ år lejeperiode</h5>

                  </div>
                  <div className="card-footer">
                  <form action="/Contact">
                    <button id="search" className="btn btn-primary" name="search"
                      type="submit">
                      <FaEnvelope/> Skriv til udlejer
						</button></form>
                  </div>

                </div>

              </div></center>
            </div>


          </div>

        </div>

        

        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

        {/*<script>
	
  $(document).ready(function() {
      
    $(".comment").shorten();	
    $(".comment-small").shorten({showChars: 10});
   });

  (function($) {
      $.fn.shorten = function(settings) {
          "use strict";

          var config = {
              showChars: 100,
              minHideChars: 10,
              ellipsesText: "...",
              moreText: "Read More",
              lessText: "less",
              onLess: function() {},
              onMore: function() {},
              errMsg: null,
              force: false
          };

          if (settings) {
              $.extend(config, settings);
          }

          if ($(this).data('jquery.shorten') && !config.force) {
              return false;
          }
          $(this).data('jquery.shorten', true);

          $(document).off("click", '.morelink');

          $(document).on({
              click: function() {

                  var $this = $(this);
                  if ($this.hasClass('less')) {
                      $this.removeClass('less');
                      $this.html(config.moreText);
                      $this.parent().prev().animate({'height':'0'+'%'}, function () { $this.parent().prev().prev().show(); }).hide('fast', function() {
                          config.onLess();
                        });

                  } else {
                      $this.addClass('less');
                      $this.html(config.lessText);
                      $this.parent().prev().animate({'height':'100'+'%'}, function () { $this.parent().prev().prev().hide(); }).show('fast', function() {
                          config.onMore();
                        });
                  }
                  return false;
              }
          }, '.morelink');

          return this.each(function() {
              var $this = $(this);

              var content = $this.html();
              var contentlen = $this.text().length;
              if (contentlen > config.showChars + config.minHideChars) {
                  var c = content.substr(0, config.showChars);
                  if (c.indexOf('<') >= 0) // If there's HTML don't want to cut it
                  {
                      var inTag = false; // I'm in a tag?
                      var bag = ''; // Put the characters to be shown here
                      var countChars = 0; // Current bag size
                      var openTags = []; // Stack for opened tags, so I can close them later
                      var tagName = null;

                      for (var i = 0, r = 0; r <= config.showChars; i++) {
                          if (content[i] == '<' && !inTag) {
                              inTag = true;

                              // This could be "tag" or "/tag"
                              tagName = content.substring(i + 1, content.indexOf('>', i));

                              // If its a closing tag
                              if (tagName[0] == '/') {


                                  if (tagName != '/' + openTags[0]) {
                                      config.errMsg = 'ERROR en HTML: the top of the stack should be the tag that closes';
                                  } else {
                                      openTags.shift(); // Pops the last tag from the open tag stack (the tag is closed in the retult HTML!)
                                  }

                              } else {
                                  // There are some nasty tags that don't have a close tag like <br/>
                                  if (tagName.toLowerCase() != 'br') {
                                      openTags.unshift(tagName); // Add to start the name of the tag that opens
                                  }
                              }
                          }
                          if (inTag && content[i] == '>') {
                              inTag = false;
                          }

                          if (inTag) { bag += content.charAt(i); } // Add tag name chars to the result
                          else {
                              r++;
                              if (countChars <= config.showChars) {
                                  bag += content.charAt(i); // Fix to ie 7 not allowing you to reference string characters using the []
                                  countChars++;
                              } else // Now I have the characters needed
                              {
                                  if (openTags.length > 0) // I have unclosed tags
                                  {
                                      //console.log('They were open tags');
                                      //console.log(openTags);
                                      for (j = 0; j < openTags.length; j++) {
                                          //console.log('Cierro tag ' + openTags[j]);
                                          bag += '</' + openTags[j] + '>'; // Close all tags that were opened

                                          // You could shift the tag from the stack to check if you end with an empty stack, that means you have closed all open tags
                                      }
                                      break;
                                  }
                              }
                          }
                      }
                      c = $('<div/>').html(bag + '<span class="ellip">' + config.ellipsesText + '</span>').html();
                  }else{
                      c+=config.ellipsesText;
                  }

                  var html = '<div class="shortcontent">' + c +
                      '</div><div class="allcontent">' + content +
                      '</div><span><a href="javascript://nop/" class="morelink">' + config.moreText + '</a></span>';

                  $this.html(html);
                  $this.find(".allcontent").hide(); // Hide all text
                  $('.shortcontent p:last', $this).css('margin-bottom', 0); //Remove bottom margin on last paragraph as it's likely shortened
              }
          });

      };

  })(jQuery);
  
</script>*/}

      </div >
    );
  }
}


export default Details;