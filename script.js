


var body = document.querySelector('body');
var abtUs = document.querySelector('.about_us');

body.style.backgroundPositionY = `${ 50 }px`;
abtUs.style.backgroundPositionY = `${ 100 }px`;


var langButton = document.querySelectorAll('.item.lang');


var welText = document.querySelector('.bg-image .welcome');
var count = 0;
langButton.forEach((lBtn, i)=>{
    var lan1 = lBtn.querySelector('.lan1');
    var lan2 = lBtn.querySelector('.lan2');
    console.log(lan1, lan2)
    lBtn.addEventListener('click', ()=>{
        lan1.classList.toggle('active');
        lan2.classList.toggle('active');
        if(++count%2) {
            lBtn.classList.remove('en');
            lBtn.classList.add('cn');
            toggleChinese();
        } else {
            lBtn.classList.remove('cn');
            lBtn.classList.add('en');
            toggleEnglish();
        }
    })
})



var mobileButton = document.querySelector('.mobile-button');
var sideNav = document.querySelector('.nav-bar .container .nav-items');
mobileButton.addEventListener('click', ()=>{
    sideNav.classList.toggle('active');
    mobileButton.classList.toggle('active');
})






var languages = 
    {
        navBar: [
            {
                en: 'Home',
                cn: '首页',
                subLinks: 0,
                loc: '#'
            },
            {
                en: 'Our Services',
                cn: '消息',
                subLinks: 0,
                loc: '#services'
            },
            {
                en: 'About Us',
                cn: '关于我们',
                loc: '#about_us',
                subLinks: [
                    {
                        en: 'Link 1',
                        cn: 'Cn SUB 1',
                        loc: 'https://facebook.com/'
                    },
                    {
                        en: 'Link 2',
                        cn: 'Cn SUB 2',
                        loc: 'https://facebook.com/'
                    },
                    {
                        en: 'Link 3',
                        cn: 'Cn SUB 3',
                        loc: 'https://facebook.com/'
                    }
                ]
            },
            {
                en: 'Business Scope',
                cn: '业务范围',
                subLinks: 0,
                loc: 'https://google.com/'
            },
            {
                en: 'Contact Us',
                cn: '联系我们',
                subLinks: 0,
                loc: '#contact_us'
            },
        ],
        headText: [
            {
                en: 'welcome To our Page',
                cn: '欢迎来到我们的页面',
            }
        ],
        ptext: [
            {
                en: ' Limpid company was incorporated at (address) on June 18, 2022. The company mainly provides third-party inspection and materials for mobile phones, computers, tablets, electronic watches, TV sets and other products for major electronic product companies in and outside Bangladesh. Re-judgment, abnormal handling, transportation, warehousing, after-sales maintenance and other professional services of materials, semi-finished products and finished products; relying on good reputation and professional advantages, the company has established good cooperative relations with many large companies and multinational companies at home and abroad; Qualifications and Certificates Obtained have been applied for and passed (Qualifications and Certificates Obtained), which indicates that our company\'s operation system has met the international standard requirements of the industry, and it is also an effective guarantee for our company to provide perfect services to customers; the company\'s service area includes Bangladesh All regions in China and India; the company has established various functional departments with complete functions to provide efficient and professional services for all cooperative enterprises.',
            cn: 'Limpid 公司于（2022年6月18日）在（address）注册成立，公司主要为孟加拉国内外各大电子产品公司提供手机、电脑、平板、电子手表、电视机等产品的第三方验货、物料复判、异常处理、物料、半成品、成品的运输、仓储，售后维修等专业的服务；凭借良好的声誉和专业优势公司与国内外多家大型公司、跨国公司建立良好的合作关系\；我司各项资质齐全，已申请并通过了（Qualifications and Certificates Obtained），这标志着我司的运行体系已经符合行业的国际标准要求，同时也是我司对客户提供完美服务的有效保证；公司服务区域包括孟加拉国所有区域、印度区域；公司设立了各类功能完善的职能部门，为所有合作企业提供高效专业的服务。',
            }
        ],
        aboutUs: [
            {
                head: {
                    en: 'About us',
                    cn: '关于我们'
                },
                companyName: {
                    en: 'Limpid',
                    cn: '弱视'
                },
                established: {
                    en: 'August 20, 2013',
                    cn: '2013年08月20日'
                },
                companyAddress: {
                    en: 'Road No #23, House No #456, Selected City, Selected State',
                    cn: 'Road No #23, House No #456, Selected City, Selected State'
                },
                companyType: {
                    type: [
                        {
                            en: 'Enterprise type Co., Ltd. (Sino-foreign association, listed) ',
                            cn: '企业类型 股份有限公司(中外会类、上市)'
                        },
                        {
                            en: 'Organization contract code',
                            cn: '组织机约代码'
                        }
                    ],
                    companyCode: {
                        en: '07692463X',
                        cn: '07692463X',
                    }
                },
                abtCard: {
                    card: [
                        {
                            head: {
                                en: 'Number of people',
                                cn: '人数'
                            },
                            body: {
                                numTarget: '547',
                                unit: {
                                    en: '',
                                    cn: ''
                                }
                            },
                        },
                        {
                            head: {
                                en: 'Registered capital',
                                cn: '注册资本'
                            },
                            body: {
                                numTarget: '80169095',
                                unit: {
                                    en: 'Million RMB',
                                    cn: '亿元人民币'
                                }
                            },
                        }
                    ]
                },
                features: {
                    head: {
                        en: 'features',
                        cn: '特征'
                    },
                    featureList: [
                        {
                            en: 'Technology development and technical consultation of mobile Internet and mobile phone software',
                            cn: '移动互联网和手机软件的技术开发和技术咨询'
                        },
                        {
                            en: 'Innovation and development of electronic products',
                            cn: '电子产品的创新与发展'
                        },
                        {
                            en: 'Import and export and related wealth distribution business (excluding state-owned sudden and easy-to-manage commodities',
                            cn: '进出口及相关财富分配业务（不含国有突发性易管理商品）'
                        },
                        {
                            en: 'Import and export requirements',
                            cn: '进出口要求'
                        },
                        {
                            en: 'License management and other specialties',
                            cn: '许可证管理和其他专业'
                        },
                        {
                            en: 'For democratically managed commodities, applications shall be processed in accordance with the relevant (regulations of the four countries)',
                            cn: '民主管理商品，按有关（四国规定）办理申请'
                        },
                        {
                            en: 'The licensed project is: Ouqihui',
                            cn: '授权项目为：欧启辉'
                        },
                    ],

                },
            },
            

        ],
        our_services: [
            {
                image: [
                    './pic/qa.jpg',
                    './pic/matRejudge.jpeg',
                    './pic/WhatsApp Image 2022-08-16 at 2.31.58 PM (1).jpeg',
                    './pic/WhatsApp Image 2022-08-16 at 2.31.58 PM.jpeg',
                    './pic/wearhousing.jpeg',
                    './pic/qa3.jpg',
                ],
                heading: {
                    en: 'Customer inspection',
                    cn: '客户验货'
                },
                body: {
                    en: 'Provide professional inspection reports for materials, semi-finished products and finished products of mobile phones, computers, tablets, watches, TV dramas and other electronic products (full inspection, AQL sampling inspection, and customer demand inspection can be performed according to customer requirements).',
                    cn: '手机、电脑、平板、手表、电视剧等电子产品的物料、半成品、成品验货（按照客户要求可以全检、AQL抽检、客户需求检验），提供专业的验货报告。'
                },
                button: {
                    en: 'See More',
                    cn: 'See More',
                    loc: ''
                }
            },
            {
                image: './pic/matRejudge.jpeg',
                heading: {
                    en: 'Material re-judgment',
                    cn: '物料复判'
                },
                body: {
                    en: 'Electronic products three-in-one, screens, motherboards, electro-acoustic devices, housings and other defective materials will be re-judged according to customer needs, and a review report will be provided',
                    cn: '电子产品三合一、屏、主板、电声器件、壳体等不良品物料根据客户需求进行复判，提供复判报告'
                },
                button: {
                    en: 'See More',
                    cn: 'See More',
                    loc: ''
                }
            },
            {
                image: './pic/pl.jpg',
                heading: {
                    en: 'exception handling',
                    cn: '异常处理'
                },
                body: {
                    en: 'Assist the supplier to confirm, analyze and handle the abnormality related to electronic products. (Provide abnormal information, assist in analysis, verify improvement effect, screen and process materials, etc.)',
                    cn: '电子产品相关异常协助供应商确认、协助分析、处理。（提供异常相关信息、协助分析、验证改善效果，对物料进行筛选、加工等）'
                },
                button: {
                    en: 'See More',
                    cn: 'See More',
                    loc: ''
                }
            },
            {
                image: 'https://www.profitableventure.com/wp-content/uploads/2022/03/Step-6-Secure-a-Location-and-Hire-Drivers.jpg',
                heading: {
                    en: 'transportation',
                    cn: '运输'
                },
                body: {
                    en: 'Relevant materials, semi-finished products and finished products can be safely transported to the designated address and warehouse.',
                    cn: '可以协助客户存储相关物料、、半成品、产品。（安全、方便、快捷、满足电子产品环境要求）'
                },
                button: {
                    en: 'See More',
                    cn: 'See More',
                    loc: ''
                }
            },
            {
                image: './pic/wearhousing.jpeg',
                heading: {
                    en: 'Warehousing',
                    cn: '仓储'
                },
                body: {
                    en: 'Can assist customers to store related materials and products. (safe, convenient, fast, meet the environmental requirements of electronic products)',
                    cn: '可以协助客户存储相关物料、产品。（安全、方便、快捷、满足电子产品环境要求）'
                },
                button: {
                    en: 'See More',
                    cn: 'See More',
                    loc: ''
                }
            },
            {
                image: [
                    './pic/matRejudge.jpeg',
                    './pic/WhatsApp Image 2022-08-16 at 2.31.58 PM (1).jpeg',
                    './pic/WhatsApp Image 2022-08-16 at 2.31.58 PM.jpeg',
                ],
                heading: {
                    en: 'After-sales and maintenance',
                    cn: '售后、维修'
                },
                body: {
                    en: 'Complete after-sales maintenance of electronic products, semi-finished products, motherboards, three-in-one, and other valuable materials.',
                    cn: '完成电子产品成品、半成品、主板、三合一、等贵重物料的售后维修。'
                },
                button: {
                    en: 'See More',
                    cn: 'See More',
                    loc: ''
                }
            }
        ]
    }

    console.log('Type of: ' + typeof languages.our_services[0].image);

console.log(languages)



var nav_bar = document.querySelectorAll('.item.l');

var parallContent = document.querySelector('.parallax-container .content');

var services = document.getElementById('services');

var aboutUs = document.querySelector('#about_us .abtUs')

var sliderCount

function toggle_nav(){


    nav_bar.forEach((link, i)=>{

        var a = document.createElement('a');
        a.href = `${ languages.navBar[i].loc }`;
        link.appendChild(a);

        var subLinks = languages.navBar[i].subLinks;
        if(subLinks != 0){
            var ul = document.createElement('ul')
            for(var j = 0; j<subLinks.length; j++)
            {
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.href = `${ subLinks[j].loc}`;
                a.classList.add('subAlink');
                li.appendChild(a)
                ul.appendChild(li);
            }
            link.appendChild(ul);
        }
    })

        var servLen = languages.our_services.length;
    console.log(servLen)
    sliderCount = 0
        for(var s=0; s<servLen; s++)
        {
            
            var serv_container = document.createElement('div');
            serv_container.classList.add('serv-container')
            var content = languages.our_services[s];
            if(typeof content.image != typeof '')
            {
                console.log('!Found')
                serv_container.innerHTML = `
                    <div class='image-part slider'>
                        <div class="slideFrame"></div>
                    </div>
                    <div class='content-part'>
                        <h2>${ true } </h2>
                        <p>${ true }</p>
                        <a class='seeMor' href="#">${ true }</a>
                    </div>
                `
                services.appendChild(serv_container)
                var sliderFrame = document.querySelectorAll('.image-part.slider .slideFrame');
                
                var sliderImagesLen = content.image.length;
                for(var i=0; i<sliderImagesLen; i++)
                {
                    var sliderImage = document.createElement('img');
                    sliderImage.src = content.image[i]
                    sliderFrame[sliderCount].appendChild(sliderImage);
                }
                sliderCount++
            } else {
                console.log('Found')
                serv_container.innerHTML = `
                    <div class='image-part'>
                    <img src='${ content.image }' alt='${ content.heading.en } Image'>
                    </div>
                    <div class='content-part'>
                        <h2>${ true } </h2>
                        <p>${ true }</p>
                        <a class='seeMor' href="#">${ true }</a>
                    </div>
                `
                services.appendChild(serv_container)
            }
            
        }

        var com_name = document.createElement('div');
        com_name.classList.add('company-name')
        com_name.innerHTML = `
                <p>${ true }</p>
                <div class="established">
                ${ true }
                </div>
                <div class="company-address">
                ${ true }
                </div>
        `




        var companyType = document.createElement('div');
        companyType.classList.add('company-type');
        companyType.innerHTML = `<div>
                <p> ${ true }</p>
                    <p> ${ true }</p>
                    <span class='company-code'>${ true }</span>
                    </div>
        `

        var abtCardlen = languages.aboutUs[0].abtCard.card.length;

        for(var i=0; i<abtCardlen; i++)
        {
            var abtCard = document.createElement('div');
            abtCard.classList.add('abtCard');
            abtCard.innerHTML = `
                    <div class="head">
                    </div>
                    <div class="body">
                        <div class="counter-anim" data-target="${ true }"></div>
                        <div class="unit">${ true }</div>
                    </div>
            `

            companyType.appendChild(abtCard);
        }
        console.log(companyType)

        var features = document.createElement('div');
        features.classList.add('features')
        var h3 = document.createElement('h3');
        features.appendChild(h3);

        var featuresList = document.createElement('div');
        featuresList.classList.add('features_list');
        var feaLen = languages.aboutUs[0].features.featureList.length
        for(var i=0; i<feaLen; i++)
        {
            featuresList.innerHTML += `<div>${true}</div>`
        }

        features.appendChild(featuresList)




        aboutUs.appendChild(com_name)
        aboutUs.appendChild(companyType)
        aboutUs.appendChild(features);

        console.log(aboutUs)

}

nav_bar.forEach((link, i)=>{
    link.onclick = ()=>{
        sideNav.classList.toggle('active');
        mobileButton.classList.toggle('active');
    }
})

toggle_nav();

var nav_bar_link = document.querySelectorAll('.item > a');

var subA = document.querySelectorAll(`.subAlink`);

var OS_heading = document.querySelectorAll('.serv-container > .content-part > h2');
var OS_body = document.querySelectorAll('.serv-container > .content-part > p');
var OS_button = document.querySelectorAll('.serv-container > .content-part > .seeMor');
var OS_image = document.querySelectorAll('.serv-container > .image-part > img');

var lanAbUs0 = languages.aboutUs[0];
var ab_head = document.querySelector('.about_us h1')
var c_name = document.querySelector('.abtUs .company-name p');
var c_est = document.querySelector('.abtUs .company-name .established');
var c_add = document.querySelector('.abtUs .company-name .company-address');
var c_part2 = document.querySelectorAll('.abtUs .company-type div p');
var c_code = document.querySelector('.company-code');
var c_cards_head = document.querySelectorAll('.abtCard .head');
var c_cards_body = document.querySelectorAll('.abtCard .body .unit');
var c_cards_count = document.querySelectorAll('.abtCard .body .counter-anim');
var c_fea = document.querySelector('.features h3');
var c_fea_list = document.querySelectorAll('.features_list div');



c_cards_count.forEach((count, c)=>{
    count.setAttribute('data-target', `${ languages.aboutUs[0].abtCard.card[c].body.numTarget }`)
})



function toggleEnglish() {

    nav_bar_link.forEach((nLink, i)=>{
        nLink.textContent = languages.navBar[i].en
    })

    var index = 0;
    nav_bar.forEach((link, i)=>{

        var subLinks = languages.navBar[i].subLinks;
        if(subLinks != 0){
            for(var k=0; k<subLinks.length; k++)
            {
                subA[index].textContent = subLinks[k].en
                index++;
            }
        }

    })

    

    parallContent.textContent = languages.ptext[0].en;

    welText.textContent = languages.headText[0].en
    
    OS_heading.forEach((head, i)=>{
        var content = languages.our_services[i];
        head.textContent = content.heading.en
        OS_body[i].textContent = content.body.en
        OS_button[i].textContent = content.button.en
        OS_button[i].innerHTML += ' &rarr;'
    })

    

    ab_head.textContent = lanAbUs0.head.en
    c_name.textContent = lanAbUs0.companyName.en
    c_est.textContent = lanAbUs0.established.en
    c_add.textContent = lanAbUs0.companyAddress.en
    c_code.textContent = lanAbUs0.companyType.companyCode.en
    c_part2.forEach((cpart, i)=>{
        cpart.textContent = lanAbUs0.companyType.type[i].en
    })
    c_cards_head.forEach((chead, c)=>{
        chead.textContent = lanAbUs0.abtCard.card[c].head.en
    })
    c_cards_body.forEach((cbody, c)=>{
        cbody.textContent = lanAbUs0.abtCard.card[c].body.unit.en
    })
    c_fea.textContent = lanAbUs0.features.head.en
    c_fea_list.forEach((f_list, f)=>{
        f_list.textContent = lanAbUs0.features.featureList[f].en
    })
    c_cards_count.forEach((count, c)=>{
        count.textContent = `${ languages.aboutUs[0].abtCard.card[c].body.numTarget }`
    })




}
toggleEnglish();

function toggleChinese() {

    nav_bar_link.forEach((nLink, i)=>{
        nLink.textContent = languages.navBar[i].cn
    })

    var index = 0;
    nav_bar.forEach((link, i)=>{

        var subLinks = languages.navBar[i].subLinks;
        if(subLinks != 0){
            for(var k=0; k<subLinks.length; k++)
            {
                subA[index].textContent = subLinks[k].cn
                index++;
            }
        }

    })

    parallContent.textContent = languages.ptext[0].cn;

    welText.textContent = languages.headText[0].cn

    OS_heading.forEach((head, i)=>{
        var content = languages.our_services[i];
        head.textContent = content.heading.cn
        OS_body[i].textContent = content.body.cn
        OS_button[i].textContent = content.button.cn
        OS_button[i].innerHTML += ' &rarr;';
    })


    ab_head.textContent = lanAbUs0.head.cn
    c_name.textContent = lanAbUs0.companyName.cn
    c_est.textContent = lanAbUs0.established.cn
    c_add.textContent = lanAbUs0.companyAddress.cn
    c_code.textContent = lanAbUs0.companyType.companyCode.cn
    c_part2.forEach((cpart, i)=>{
        cpart.textContent = lanAbUs0.companyType.type[i].cn
    })
    c_cards_head.forEach((chead, c)=>{
        chead.textContent = lanAbUs0.abtCard.card[c].head.cn
    })
    c_cards_body.forEach((cbody, c)=>{
        cbody.textContent = lanAbUs0.abtCard.card[c].body.unit.cn
    })
    c_fea.textContent = lanAbUs0.features.head.cn
    c_fea_list.forEach((f_list, f)=>{
        f_list.textContent = lanAbUs0.features.featureList[f].cn
    })


}


var counter = document.querySelectorAll('.counter-anim')

        function cnts(){
            counter.forEach((cnt, i)=>{
                var target = cnt.getAttribute('data-target');
                target = parseInt(target);
                var increment = target/250
                var printed = 0
                cnt.textContent = `${ printed }`
                var timeOut = setInterval(reachTargetNumber, 10);
        
                function reachTargetNumber(){
                    
                    printed += increment
                    cnt.textContent = `${ parseInt(printed) }`
                    if(printed >= target) {
                        cnt.textContent = `${ target }`
                        clearTimeout(timeOut);
                    }
    
                }
            })
        }



/*
        
*/

var moved = [];
for(var m=0; m<sliderCount; m++)
{
    moved[m] = 0
}
var slider = document.querySelectorAll('.image-part.slider');
slider.forEach((slideR, sli)=>{
    var sliderFrame = slideR.querySelector('.slideFrame')
    
    var slideRInfo = slideR.getBoundingClientRect()
    var slideRwidth = slideRInfo.width
    var slideRheight = slideRInfo.height

    var slideImages = sliderFrame.querySelectorAll('img')
    var sIL = slideImages.length

    sliderFrame.style.width = slideRwidth * sIL + 'px';

    slideImages.forEach((slImage)=>{
        slImage.style.width = slideRwidth + 'px'
        slImage.style.height = slideRheight + 'px'
    })
    
    
    var moving = setInterval(moveSlider, 3000)

    function moveSlider(){
        sliderFrame.style.left = `-${ moved[sli] }px`
        moved[sli] += slideRwidth
        if(moved[sli]  >= slideRwidth * sIL)
        {
            moved[sli] = 0;
        }
    }
})








var cards = document.querySelectorAll('.serv-container .content-part');
var images = document.querySelectorAll('.serv-container .image-part');
var abtCard = document.querySelector('.company-type')
var arrow = document.querySelector('.arrow')

var scH =  window.innerHeight;
var startedCounting = false

window.onscroll = (e)=>{

        
        var abtCardInfo = abtCard.getBoundingClientRect()
        var abtCardHeight = abtCardInfo.height
        var abtCardy = abtCardInfo.y;
        var point = parseInt(abtCardy+abtCardHeight - scH)
        if(point < 0){
            if(startedCounting == false)
            {
                cnts();
                startedCounting = true
            }
        }



    var y = this.scrollY;
    body.style.backgroundPositionY = `${ 50 - y*0.3 }px`;

    var abtUsInfo = abtUs.getBoundingClientRect();
    var abtUsY = abtUsInfo.y

    if(abtUsY - scH < 0){
        abtUs.style.backgroundPositionY = `-${ 100 - (abtUsY - scH)*0.3 }px`;
    }

    images.forEach((card, i) => {
        var cInfo = card.getBoundingClientRect();
        var cardY = cInfo.y;
        var cardHight = cInfo.height;
        if(cardY + cardHight/3 < scH){
            card.classList.add('arrived');
            cards[i].classList.add('arrived');
        } else {
            card.classList.remove('arrived');
            cards[i].classList.remove('arrived');
        }
    })

    console.log('y: ' + y)

    if(y > 2200)
    {
        arrow.style.visibility = 'visible';
        arrow.style.opacity = 1
    } else {
        arrow.style.visibility = 'hidden';
        arrow.style.opacity = 0
    }


}