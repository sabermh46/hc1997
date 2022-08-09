

var body = document.querySelector('body');
var abtUs = document.querySelector('.about_us');

body.style.backgroundPositionY = `${ 50 }px`;
abtUs.style.backgroundPositionY = `${ 100 }px`;


var langButton = document.querySelector('.nav-bar .container .nav-items .item.lang');
var lan1 = document.querySelector('.lan1');
var lan2 = document.querySelector('.lan2');

var welText = document.querySelector('.bg-image .welcome');
var count = 0;

langButton.addEventListener('click', ()=>{
    lan1.classList.toggle('active');
    lan2.classList.toggle('active');
    if(++count%2) {
        langButton.classList.remove('en');
        langButton.classList.add('cn');
        toggleChinese();
    } else {
        langButton.classList.remove('cn');
        langButton.classList.add('en');
        toggleEnglish();
    }
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
                en: 'Front Page',
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

        our_services: [
            {
                image: 'https://www.intouch-quality.com/hubfs/quality-defects-ft-lg.jpg',
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
                image: 'https://reciprocity.com/wp-content/uploads/2021/06/resource_audit-procedures-internal-controls_featured-img_730x270.jpg',
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
                image: 'https://thumbs.dreamstime.com/b/exception-handling-form-binary-code-d-illustration-84207111.jpg',
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
                image: 'https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/job_description_template/Warehouse_Worker.jpg=ws720x480',
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
                image: 'https://www.profolus.com/wp-content/uploads/2019/02/Examples-and-types-of-after-sales-service.jpg',
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

console.log(languages)



var nav_bar = document.querySelectorAll('.nav-items .item:not(.item.lang)');

var parallContent = document.querySelector('.parallax-container .content');

var services = document.getElementById('services');


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
        for(var s=0; s<servLen; s++)
        {
            var serv_container = document.createElement('div');
            serv_container.classList.add('serv-container')
            var content = languages.our_services[s];
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

    var servLen = languages.our_services.length;

    var content = languages.our_services[0];
    
    OS_heading.forEach((head, i)=>{
        var content = languages.our_services[i];
        head.textContent = content.heading.en
        OS_body[i].textContent = content.body.en
        OS_button[i].textContent = content.button.en
        OS_button[i].innerHTML += ' &rarr;'
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


}









var cards = document.querySelectorAll('.serv-container .content-part');
var images = document.querySelectorAll('.serv-container .image-part');

var scH =  window.innerHeight;

window.onscroll = (e)=>{

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


}