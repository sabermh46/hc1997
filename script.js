


var langButton = document.querySelector('.nav-bar .container .nav-items .item.lang');
var lan1 = document.querySelector('.lan1');
var lan2 = document.querySelector('.lan2');
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
                loc: 'https://google.com/'
            },
            {
                en: 'About Us',
                cn: '关于我们',
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
                en: 'News',
                cn: '消息',
                subLinks: 0,
                loc: 'https://google.com/'
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
                loc: 'https://google.com/'
            },
        ],
        headText: [
            {
                en: '',
                cn: '',
            }
        ]
    }

console.log(languages)



var nav_bar = document.querySelectorAll('.nav-items .item:not(.item.lang)');
console.log(nav_bar)

function toggleChinese() {
    nav_bar.forEach((link, i)=>{
        link.textContent = languages.navBar[i].cn
        var subLinks = languages.navBar[i].subLinks;
        if(subLinks != 0){
            var ul = document.createElement('ul')
            for(var i = 0; i<subLinks.length; i++)
            {
                var li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = subLinks[i].cn;
                console.log(subLinks[i].cn);
            }
            link.appendChild(ul);
        }
    })
}

function toggleEnglish() {
    nav_bar.forEach((link, i)=>{
        link.textContent = languages.navBar[i].en
        var subLinks = languages.navBar[i].subLinks;
        if(subLinks != 0){
            var ul = document.createElement('ul')
            for(var i = 0; i<subLinks.length; i++)
            {
                var li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = subLinks[i].en;
                console.log(subLinks[i].en);
            }
            link.appendChild(ul);
        }
    })
}
toggleEnglish();