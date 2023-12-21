$(function(){
            let gnbRLi = $("nav#gnb ul#gnbR li");
            let gnbLLi = $("nav#gnb ul#gnbL li");
            let dept2Wrap = $("div.dept2Wrap");
            let serviceDept = $("div.serviceDept2");
            let dept3Li = $("ul.dept3 > li");

            gnbRLi.on("mouseover", function(){
                let tg = $(this);
                let i = tg.index();
                
                dept2Wrap.eq(i+2).show();
                gnbRLi.eq(i).addclass("hover");
                
            })
            dept2Wrap.mouseover(function(){
                let tg = $(this);
                tg.show();
            })

            gnbRLi.on("mouseleave", function(){
                let tg = $(this);
                let i = tg.index();

                dept2Wrap.eq(i+2).hide();
            })
            dept2Wrap.mouseleave(function(){
                let tg = $(this);
                tg.hide();
            })
            gnbLLi.on("mouseover", function(){
                let tg = $(this);
                let i = tg.index();

                if(i!=0) dept2Wrap.eq(i-1).show();

                if(i == 0) {serviceDept.show(); }
            })
            serviceDept.mouseover(function(){
                serviceDept.show();
            })

            gnbLLi.on("mouseleave", function(){
                let tg = $(this);
                let i = tg.index();

                if(i != 0) dept2Wrap.eq(i-1).hide();    
                if(i == 0) serviceDept.hide();
            })
            serviceDept.mouseleave(function(){
                serviceDept.hide();
            })

            dept3Li.mouseover(function(){
                dept3Li.parent($("li")).css({"color" : "#2CC1EA"});
            })
        


            /*모바일 화면  nav fucntion*/
            let burgerBtn = $("a.hambergerBtn span.burgerBtn");
            let closeBtn = $("a.hambergerBtn span.closeBtn")
            let gnb_m = $("div#gnb_m_wrap> ul.gnb_m");
            let gnb_m_li = $("ul.gnb_m>li");
            let gnb_m_dept2 = $("ul.gnb_m_dept2");
            let gnb_m_dept2_li = $("ul.gnb_m_dept2>li");
            let gnb_m_dept3 = $("ul.gnb_m_dept3");

            closeBtn.hide();
            gnb_m.hide();
            gnb_m_dept2.hide();
            gnb_m_dept3.hide();
             //햄버거 버튼 클릭 시 nav 보이게하기
            burgerBtn.click(function(){
                gnb_m.addClass("on");
                gnb_m.show();
                burgerBtn.hide();
                closeBtn.show();
            })
            closeBtn.click(function(){
                gnb_m.removeClass("on");
                gnb_m.hide();
                burgerBtn.show();
                closeBtn.hide();
            })

            // 모바일 네비게이션 클릭 시 index() 따와서 dept2 open
            gnb_m_li.click(function(){
                let target = $(this);
                let numLi = target.index();
                gnb_m_dept2.removeClass('on');

                gnb_m_dept2.eq(numLi).addClass('on');
            })

            // 모바일 네비게이션 클릭 시 index() 따와서 dept3 open
            
            gnb_m_dept2_li.click(function(){
                let target1 = $(this);
                let dept3Li = target1.index();
                // alert(detp3Li);
                // gnb_m_dept3.removeClass('dept3on');
                gnb_m_dept3.hide();
                gnb_m_dept3.eq(dept3Li).show();
                
            })

        setInterval( () => {

          const date = new Date();
          
          const h = date.getHours() * 30;
          const m = date.getMinutes() * 6;
          const s = date.getSeconds() * 6;

          const  hour = document.querySelector('#hour');
          const  minute = document.querySelector('#minute');
          const  second = document.querySelector('#second');

          hour.style.transform = ` rotateZ(${h+(m/12)}deg)`;
          minute.style.transform = `rotateZ(${m}deg)`;
          second.style.transform = `rotateZ(${s}deg)`;

        });
            
            
})