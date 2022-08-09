

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
                en: 'Guangdong Hao Chuan Management Service Co., Ltd. was incorporated in Foshan City, Guangdong Province in 2005 with a registered capital of 20 million RMB. The company mainly provides professional financial outsourcing services for major domestic financial institutions. With a good reputation and advantages in the industry, the company has established good cooperative relations with many domestic state-owned banks, joint-stock commercial banks, city commercial banks, rural commercial banks, foreign banks and licensed auto financial institutions. Our company has complete qualifications, and has applied for and passed: ISO9001 quality management system certification, ISO27001 information security management system certification, ISO22301 business continuity management system certification, ISO20000 information technology service management system certification, and obtained the enterprise credit rating The 3A certificate and the CMMI3 software capability maturity model are integrated with the 3-level certificate, which indicates that our company\'s operation system meets the international standard requirements of the industry, and it is also a proof of our company\'s effective guarantee of customer information security. The company\'s business outlets cover the domestic super first-tier and first- and second-tier cities, and its business capabilities radiate to the surrounding areas. The company has established various functional departments with complete functions to provide safe and efficient logistics support for all partners and branches across the country. In response to the needs of business development, our company has successively established 3 wholly-owned subsidiaries: Guangzhou',
            cn: '广东浩传管理服务有限公司于 2005 年在广东省佛山市注册成立，注册资金贰仟万元人民币。公司主要为国内各大金融机构提供专业的金融外包服务。凭借行业内良好的声誉和优势，公司与国内多家国有银行、股份制商业银行、城市商业银行、农村商业银行、外资银行以及持牌汽车金融机构等建立有良好合作关系\
            我司各项资质齐全, 已申请并通过了包括 ISO9001 质量管理体系认证证,ISO27001信息安全管理体系认证、ISO22301业务连续性管理体系认证、ISO20000信息技术服务管理体系认证，并获得了企业信用等级3A证书和CMMI3软件能力成熟度模型集成3级证书，这标志着我司的运行体系符合行业的国际标准要求，同时也是我司对于客户信息安全有效保障的证明\
            公司营业网点覆盖国内超一线及一、二线城市，业务能力辐射周边。公司设立有功能完善的各类职能部门，为所有合作商及全国各地分公司提供安全高效的后勤保障。应业务发展需要，我司相继成立了3家全资子公司：广州晟捷企业管理服务有限公司、深圳市洪瑞资产管理有限公司以及广州洪硕信息科技有限公司，为公司全面发展提供支持\
            我司行业经验丰富，业绩优良稳定，作业规范，信誉良好。与各大金融机构合作多年，接受各合作方的相关业务培训和指导，对金融外包业务的管理和要求较为熟悉。公司凭借多年的努力和发展，荣幸获得各大合作方的好评和嘉奖，包括多项“年度战略合作伙伴”、“核心战略合作伙伴”、“卓越贡献奖”、“优秀合作机构”、“核心委外机构”等荣誉奖项\
    浩传公司将一如既往地竭诚为各合作方提供优质、安全、高效、规范和稳定的服务，与各合作方携手共创合作共赢的未来!',
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
                    en: 'Inspection of materials, semi-finished products and finished products of mobile phones, computers, tablets, watches, TV dramas and other electronic products (full inspection, AQL sampling inspection, and customer demand inspection can be performed according to customer requirements), and provide inspection reports.',
                    cn: '手机、电脑、平板、手表、电视剧等电子产品的物料、半成品、成品验货（按照客户要求可以全检、AQL抽检、客户需求检验），提供验货报告。'
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
                    en: 'Relevant materials and products can be safely transported.',
                    cn: '可以安全运输相关物料、产品。'
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