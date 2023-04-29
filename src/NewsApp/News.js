import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
     article = [
          {
               source: {
                    id: null,
                    name: "CBS Sports",
               },
               author: "",
               title: "2023 NFL Draft grades, tracker: Analysis and projections for all second-round picks, NFL Draft order - CBS Sports",
               description: "Chris Trapasso grades the second day of the 2023 NFL Draft",
               url: "https://www.cbssports.com/nfl/draft/news/2023-nfl-draft-order-grades-tracker-analysis-and-projections-for-every-second-round-picks-nfl-draft-order/",
               urlToImage:
                    "https://sportshub.cbsistatic.com/i/r/2023/04/28/58bf1e47-57d3-4a64-b9fe-10f3cb1eb143/thumbnail/1200x675/9f3b410e2017b4bce1d7c4a43b5c7468/will-levis.jpg",
               publishedAt: "2023-04-29T00:04:00Z",
               content: "The 2023 NFL Draft is underway and every pick will either be praised or ridiculed and I'm here to do both. Want to know what I think of every pick made Friday in the second round of the 2023 NFL Draf… [+7996 chars]",
          },
          {
               source: {
                    id: "cnn",
                    name: "CNN",
               },
               author: "Ben Morse",
               title: "Will Levis, widely expected to be picked in first round of 2023 NFL Draft, suffers awkward moments as he isn't chosen until round 2 - CNN",
               description:
                    "We've seen it before. Those cutaways during the NFL Draft to hopefuls waiting for their names to be picked as other players are chosen ahead of them.",
               url: "https://www.cnn.com/2023/04/28/sport/will-levis-2023-nfl-draft-first-round-spt-intl/index.html",
               urlToImage:
                    "https://media.cnn.com/api/v1/images/stellar/prod/230428093620-01-will-levis-nfl-draft-day-one.jpg?c=16x9&q=w_800,c_fill",
               publishedAt: "2023-04-28T23:34:00Z",
               content: "Weve seen it before. Those cutaways during the NFL Draft to hopefuls waiting for their names to be picked as other players are chosen ahead of them. \r\nExpressions range from confusion and disbelief t… [+2578 chars]",
          },
          {
               source: {
                    id: null,
                    name: "Yahoo Entertainment",
               },
               author: "Frank Schwab",
               title: "NFL Draft: Pittsburgh drafts Joey Porter Jr., son of a Steelers legend - Yahoo Sports",
               description: "Steelers fans are familiar with the name Joey Porter.",
               url: "https://sports.yahoo.com/nfl-draft-pittsburgh-drafts-joey-porter-jr-son-of-a-steelers-legend-231811344.html",
               urlToImage:
                    "https://s.yimg.com/ny/api/res/1.2/6tAb4Ik9DE1cOBth0PbsKw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-04/6bfacc50-e61a-11ed-9ef3-8dd3d07a546f",
               publishedAt: "2023-04-28T23:18:11Z",
               content: "Joey Porter was a star with the Pittsburgh Steelers. He was a big part of some good Steelers defenses in the 2000s and a key piece of a Super Bowl champion.\r\nThere aren't many picks that fit more per… [+1216 chars]",
          },
          {
               source: {
                    id: "reuters",
                    name: "Reuters",
               },
               author: null,
               title: "DeSantis' tough words may come back to haunt him in Disney lawsuit, experts say - Reuters",
               description:
                    'Now that the year-long war of words between Florida Governor Ron DeSantis and the Walt Disney Co <a href="https://www.reuters.com/companies/DIS.N" target="_blank">(DIS.N)</a> has landed in the courts, the Republican leader might find his verbal barbs directed…',
               url: "https://www.reuters.com/legal/desantis-tough-words-may-come-back-haunt-him-disney-lawsuit-experts-2023-04-28/",
               urlToImage:
                    "https://www.reuters.com/resizer/eV1FtcM62GpEQOsaKQQbUepTP-s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KZI242SN3FLKNILYE6ROE4U6Z4.jpg",
               publishedAt: "2023-04-28T23:07:00Z",
               content: "WILMINGTON, Delaware, April 28 (Reuters) - Now that the year-long war of words between Florida Governor Ron DeSantis and the Walt Disney Co (DIS.N) has landed in the courts, the Republican leader mig… [+4854 chars]",
          },
          {
               source: {
                    id: "financial-times",
                    name: "Financial Times",
               },
               author: "Brooke Masters, Mark Vandevelde, Stephen Gandel, Colby Smith",
               title: "Federal Reserve review pins blame for SVB failure on Donald Trump-era rule changes - Financial Times",
               description:
                    "US central bank says its own supervisors were too slow to correct blunders by Silicon Valley Bank’s management",
               url: "https://www.ft.com/content/cd7d2d8b-32b9-4f89-8bd0-b23efeb33be2",
               urlToImage:
                    "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F70775cf6-6c4b-401b-be20-0ce8fb68a6f1.jpg?source=next-opengraph&fit=scale-down&width=900",
               publishedAt: "2023-04-28T22:30:51Z",
               content: "Silicon Valley Banks failure last month stemmed from weakened regulations during the Trump administration and mis-steps by internal supervisors who were too slow to correct management blunders, the U… [+6248 chars]",
          },
          {
               source: {
                    id: "the-washington-post",
                    name: "The Washington Post",
               },
               author: "Robert Barnes",
               title: "Alito says Dobbs leaker wasn't a conservative, but won't name names - The Washington Post",
               description:
                    "The leak of the Dobbs v. Jackson Women’s Health Organization draft opinion rocked the Supreme Court and its tradition of secrecy involving unreleased opinions.",
               url: "https://www.washingtonpost.com/politics/2023/04/28/alito-leaker-dobbs-wsj/",
               urlToImage:
                    "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OGV2RIFQP5AYBAWEMZHDQEMFMY.jpg&w=1440",
               publishedAt: "2023-04-28T21:55:24Z",
               content: "Comment on this story\r\nComment\r\nJustice Samuel A. Alito Jr. said in an interview earlier this month that he has a pretty good idea who leaked his draft Supreme Court opinion that overturned Roe v. Wa… [+5122 chars]",
          },
          {
               source: {
                    id: null,
                    name: "YouTube",
               },
               author: null,
               title: "2 US Army helicopters collide in Alaska, killing 3 soldiers - WTVR CBS 6",
               description:
                    "The U.S. Army says three soldiers have been killed and another has been injured after two helicopters collided in flight in Alaska while returning from a tra...",
               url: "https://www.youtube.com/watch?v=y_0-6LvP4RQ",
               urlToImage: "https://i.ytimg.com/vi/y_0-6LvP4RQ/maxresdefault.jpg",
               publishedAt: "2023-04-28T21:15:26Z",
               content: null,
          },
          {
               source: {
                    id: null,
                    name: "Fox Business",
               },
               author: "FOXBusiness",
               title: "First Republic Bank to be taken over by FDIC: Report - Fox Business",
               description:
                    "The FDIC is planning to take ownership over First Republic Bank imminently and says that there's no time for the bank to go after a private sector rescue, according to a report from Reuters.",
               url: "https://www.foxbusiness.com/financials/first-republic-bank-taken-over-fdic-report",
               urlToImage:
                    "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/03/0/0/first-republic.jpg?ve=1&tl=1",
               publishedAt: "2023-04-28T21:12:13Z",
               content: "First Republic Bank will be placed under the receivership of the U.S. Federal Deposit Insurance Corporation imminently, according to a report.\r\nReuters reported on Friday that the FDIC has decided th… [+377 chars]",
          },
          {
               source: {
                    id: "al-jazeera-english",
                    name: "Al Jazeera English",
               },
               author: "Al Jazeera",
               title: "UN raises Darfur alarm as battles rage in Sudan despite truce - Al Jazeera English",
               description:
                    "The fighting has reawakened a two-decade-old conflict in the western Darfur region where many have died this week.",
               url: "https://www.aljazeera.com/news/2023/4/28/un-raises-darfur-alarm-as-battles-rage-in-sudan-despite-truce",
               urlToImage:
                    "https://www.aljazeera.com/wp-content/uploads/2023/04/2023-04-28T101314Z_2063336381_RC2MN0AXIFT4_RTRMADP_3_SUDAN-POLITICS-1682712537.jpg?resize=1920%2C1440",
               publishedAt: "2023-04-28T20:44:19Z",
               content: "The United Nations has warned there is a serious risk of violence escalating in Sudans West Darfur region as heavy battles raged across the country despite the warring sides agreeing to a new ceasefi… [+3539 chars]",
          },
          {
               source: {
                    id: "cbs-news",
                    name: "CBS News",
               },
               author: null,
               title: "Iran airs video of commandos descending from helicopter to seize oil tanker bound for Texas - CBS News",
               description:
                    "A photograph showed one commando with his fist in the air after apparently taking the vessel.",
               url: "https://www.cbsnews.com/news/iran-video-commandos-seize-us-bound-oil-tanker-gulf-oman/",
               urlToImage:
                    "https://assets2.cbsnewsstatic.com/hub/i/r/2023/04/28/f583eb3d-2b9c-49c4-9d99-4d03765cdbc9/thumbnail/1200x630/ae6aba1eff1e3a9e6ea1ac8c9b091327/ap23118510866606.jpg",
               publishedAt: "2023-04-28T20:44:03Z",
               content: "Masked Iranian navy commandos conducted a helicopter-borne raid to seize a U.S.-bound oil tanker in the Gulf of Oman, footage aired by Iran's state television showed Friday.\r\nThe capture on Thursday … [+3361 chars]",
          },
          {
               source: {
                    id: null,
                    name: "CNBC",
               },
               author: "Emma Newburger",
               title: "California bans the sale of new diesel trucks by 2036 - CNBC",
               description:
                    "The new mandate is estimated to deliver $26.5 billion in public health benefits in California in avoided health impacts and deaths due to diesel pollution.",
               url: "https://www.cnbc.com/2023/04/28/california-bans-the-sale-of-new-diesel-trucks-by-2036.html",
               urlToImage:
                    "https://image.cnbcfm.com/api/v1/image/107232999-1682709785226-gettyimages-1242715164-AFP_32H42C4.jpeg?v=1682712556&w=1920&h=1080",
               publishedAt: "2023-04-28T20:09:16Z",
               content: "California regulators on Friday voted to ban the sale of new diesel big rigs by 2036 and require all trucks to be zero-emissions by 2042, a decision that puts the state at the forefront of mitigating… [+3115 chars]",
          },
          {
               source: {
                    id: "abc-news",
                    name: "ABC News",
               },
               author: "MARCIA DUNN AP Aerospace Writer",
               title: "China's Mars rover finds signs of recent water in sand dunes - ABC News",
               description:
                    "A new study suggests water on Mars may be more widespread and recent than previously thought",
               url: "https://abcnews.go.com/Technology/wireStory/chinas-mars-rover-finds-signs-recent-water-sand-98944600",
               urlToImage:
                    "https://s.abcnews.com/images/Technology/wirestory_937fb473f76d75cc9f268e6e720c864f_16x9_992.jpg",
               publishedAt: "2023-04-28T19:41:20Z",
               content: "CAPE CANAVERAL, Fla. -- Water may be more widespread and recent on Mars than previously thought, based on observations of Martian sand dunes by China's rover. \r\nThe finding highlights new, potentiall… [+3316 chars]",
          },
          {
               source: {
                    id: null,
                    name: "Space.com",
               },
               author: "Elizabeth Howell",
               title: "Europe's JUICE Jupiter probe has an antenna glitch in deep space - Space.com",
               description:
                    'Engineers "have lots of ideas up their sleeves" to fix the issue, the European Space Agency says.',
               url: "https://www.space.com/juice-jupiter-probe-antenna-glitch-deep-space",
               urlToImage: "https://cdn.mos.cms.futurecdn.net/Kg55TTEUuMn4bdQBigrtpC-1200-80.jpg",
               publishedAt: "2023-04-28T19:38:49Z",
               content: "Europe's flagship Jupiter mission is struggling to unfurl an antenna in deep space.\r\nThe Jupiter Icy Moons Explorer or JUICE spacecraft has a stuck antenna on one of its instruments, European Space A… [+2898 chars]",
          },
          {
               source: {
                    id: "the-hill",
                    name: "The Hill",
               },
               author: "Brooke Migdon",
               title: "Kansas enacts sweeping transgender ‘bathroom bill’ - The Hill",
               description:
                    "Republican legislators in Kansas on Thursday enacted what LGBTQ rights groups have characterized as one of the most sweeping and restrictive transgender bathroom bills in U.S. history, overriding Democratic Gov. Laura Kelly’s veto of the measure. The Kansas H…",
               url: "https://thehill.com/homenews/lgbtq/3978481-kansas-enacts-sweeping-transgender-bathroom-bill/",
               urlToImage: "https://thehill.com/wp-content/uploads/sites/2/2023/03/transflag_adobestock.jpg?w=1280",
               publishedAt: "2023-04-28T18:49:00Z",
               content: "Skip to content\r\nRepublican legislators in Kansas on Thursday enacted what LGBTQ rights groups have characterized as one of the most sweeping and restrictive transgender bathroom bills in U.S. histor… [+3154 chars]",
          },
          {
               source: {
                    id: "cnn",
                    name: "CNN",
               },
               author: "Brenda Goodman",
               title: "CDC eases certain Covid-19 vaccine requirements for international travelers to US - CNN",
               description:
                    "The US Centers for Disease Control and Prevention is still requiring international visitors boarding flights to the United States to be vaccinated against Covid-19, but it's easing vaccine requirements for those travelers.",
               url: "https://www.cnn.com/2023/04/28/health/cdc-eases-travel-restrictions-covid-19/index.html",
               urlToImage:
                    "https://media.cnn.com/api/v1/images/stellar/prod/210608193056-cdc-travel-update.jpg?q=x_46,y_67,h_834,w_1482,c_crop/w_800",
               publishedAt: "2023-04-28T18:28:00Z",
               content: "The US Centers for Disease Control and Prevention is still requiring international visitors boarding flights to the United States to be vaccinated against Covid-19, but its easing vaccine requirement… [+1844 chars]",
          },
          {
               source: {
                    id: "cnn",
                    name: "CNN",
               },
               author: "Tierney Sneed,Ariane de Vogue,Ethan Cohen",
               title: "GOP-controlled North Carolina Supreme Court reverses rulings that struck down partisan gerrymanders by Republican lawmakers - CNN",
               description:
                    "The Republican-controlled North Carolina Supreme Court -- reversing previous rulings that were handed down when the state Supreme Court leaned Democratic -- said Friday that North Carolina's constitution gave state courts no role to play in policing partisan …",
               url: "https://www.cnn.com/2023/04/28/politics/north-carolina-gerrymandering-supreme-court/index.html",
               urlToImage:
                    "https://media.cnn.com/api/v1/images/stellar/prod/230428123525-north-carolina-redistricting.jpg?c=16x9&q=w_800,c_fill",
               publishedAt: "2023-04-28T18:03:00Z",
               content: "The Republican-controlled North Carolina Supreme Court reversing previous rulings that were handed down when the state Supreme Court leaned Democratic said Friday that North Carolinas constitution ga… [+10408 chars]",
          },
          {
               source: {
                    id: null,
                    name: "9to5google.com",
               },
               author: "Ben Schoon",
               title: "OnePlus Pad doesn't have a fingerprint sensor - 9to5Google",
               description:
                    "The OnePlus Pad is billed as a flagship offering, but its lack of a fingerprint sensor or secure biometrics will be a deal-breaker for some.",
               url: "https://9to5google.com/2023/04/28/oneplus-pad-fingerprint-biometrics/",
               urlToImage:
                    "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/04/oneplus-pad-3.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
               publishedAt: "2023-04-28T17:45:00Z",
               content: "The OnePlus Pad has a lot of good aspects, but one thing that buyers might not notice before buying is that the tablet lacks any form of secure biometrics it comes without a fingerprint sensor or a p… [+2686 chars]",
          },
          {
               source: {
                    id: null,
                    name: "Vulture",
               },
               author: "Emily Kirkpatrick",
               title: "Glen Powell and Sydney Sweeney Dating, Flirting Timeline - Vulture",
               description:
                    "Ahead of their romantic-comedy, ‘Anyone But You,’ Glen Powell and Sydney Sweeney have riled up the internet with their very convincing offscreen chemistry.",
               url: "http://www.vulture.com/2023/04/glen-powell-sydney-sweeney-flirting-rom-com-timeline.html",
               urlToImage:
                    "https://pyxis.nymag.com/v1/imgs/5cf/86e/c6e38dbba146e039f2dd5ad6d9b72ec0e1-sweeney-powell.1x.rsocial.w1200.jpg",
               publishedAt: "2023-04-28T17:32:18Z",
               content: "By now, every person with eyes and internet access has borne witness to the palpable sexual tension currently radiating between co-stars Sydney Sweeney and Glen Powell.\r\nWhile promoting their new fil… [+6897 chars]",
          },
          {
               source: {
                    id: "engadget",
                    name: "Engadget",
               },
               author: "https://www.engadget.com/about/editors/kris-holt",
               title: "Microsoft inks another cloud gaming deal after the UK blocked its Activision takeover - Engadget",
               description:
                    "Microsoft is hoping that a 10-year deal with another cloud gaming company will help convince EU regulators to approve its Activision Blizzard takeover..",
               url: "https://www.engadget.com/microsoft-inks-another-cloud-gaming-deal-after-the-uk-blocked-its-activision-takeover-172518808.html",
               urlToImage:
                    "https://s.yimg.com/uu/api/res/1.2/9SBFmqN9wXJDznE2MRhHCQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/fda8af10-e5e7-11ed-bbff-7d440584a9b0.cf.jpg",
               publishedAt: "2023-04-28T17:26:26Z",
               content: "Despite suffering a significant blow this week in its attempt to take over Activision Blizzard\r\n, Microsoft\r\n still believes it can get the job done. The company has signed a 10-year agreement with S… [+2560 chars]",
          },
          {
               source: {
                    id: null,
                    name: "YouTube",
               },
               author: null,
               title: "Could a new diabetes drug be a game changer for weight loss? - MSNBC",
               description:
                    "Ana Cabrera talks to Dr. Vin Gupta about a new diabetes drug that has had lifechanging results for people dealing with obesity and could be on the fast track...",
               url: "https://www.youtube.com/watch?v=lnPJfE_Qfig",
               urlToImage: "https://i.ytimg.com/vi/lnPJfE_Qfig/maxresdefault.jpg",
               publishedAt: "2023-04-28T17:05:05Z",
               content: null,
          },
     ];
     constructor() {
          super();
          this.state = {
               article: this.article,
               loading: false,
          };
     }
     render() {
          return (
               <div className="container mx-6 my-3">
                    <h1>Headlines Today</h1>
                    <div className="row">
                         {this.state.article.map((element) => {
                              return <div className="col-md-3" key={element.url}>
                                   <NewsItems
                                        title={element.title}
                                        description={element.description}
                                        imageURL={element.urlToImage}
                                        newsURL={element.url}
                                   />
                              </div>;
                         })}
                    </div>
               </div>
          );
     }
}
