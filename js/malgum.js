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
        

        /*브라우저 스크롤 시 발생되는 애니메이션 추가 */
         
            var awardsTitle = $("section#awards div.awardTitle");
            var mcTab_list = $('div.mcWrap div.mcTabBox ul.mcTab li');
            var mcTab = $('div.mcWrap div.mcTabBox ul.mcTab');

            var scrollBottom = $(window).height() + $(window).scrollTop()+100;
            var win_height = $(document).height() - $(window).height();

            var awardsTop = $("section#awards").offset().top;
            var awardsTitle_1 = $("section#awards div.awardTitle").eq(0).offset().top;
            var awardsTitle_2 = $("section#awards div.awardTitle").eq(1).offset().top;
            var awardsTitle_3 = $("section#awards div.awardTitle").eq(3).offset().top;



            var homeMakeTop = $("div.mcTextBoxInner").eq(0).offset().top;
            var graphicDesign = $("div.mcTextBoxInner").eq(1).offset().top;
            var softwareDevelop = $("div.mcTextBoxInner").eq(2).offset().top;
            var homeOperate = $("div.mcTextBoxInner").eq(3).offset().top;
            var marketing = $("div.mcTextBoxInner").eq(4).offset().top;

            var mcTabBox_1 = $('div.mcWrap div.mcTabBox').eq(0);
            var mcTabBox_2 = $('div.mcWrap div.mcTabBox').eq(1);
            var mcTabBox_3 = $('div.mcWrap div.mcTabBox').eq(2);
            var mcTabBox_4 = $('div.mcWrap div.mcTabBox').eq(3);
            var mcTabBox_5 = $('div.mcWrap div.mcTabBox').eq(4);

            var mcImgBox_1 = $('div.mcImgBox').eq(0);
            var mcImgBox_2 = $('div.mcImgBox').eq(1);
            var mcImgBox_3 = $('div.mcImgBox').eq(2);
            var mcImgBox_4 = $('div.mcImgBox').eq(3);
            var mcImgBox_5 = $('div.mcImgBox').eq(4);
            
            var dsTextBox = $('div.dswrap div.dsTextBox');
            var dsTextBox_top = $('div.dswrap div.dsTextBox').offset().top;

            var msTextBox = $('div.msTextBox');
            var msTextBox_top = $('div.msTextBox').offset().top;

            if(awardsTitle_1 < scrollBottom){
                $("section#awards div.awardTitle").eq(0).addClass('move_leftRigth');
            }
            if(awardsTitle_2 < scrollBottom){
                $("section#awards div.awardTitle").eq(1).addClass('move_leftRigth');
            }
            if(awardsTitle_3 < scrollBottom){
                $("section#awards div.awardTitle").eq(3).addClass('move_leftRigth');
            }

            if(homeMakeTop < scrollBottom){
                $("div.mcTextBoxInner").eq(0).addClass('move_leftRigth');
                mcTabBox_1.addClass('move_rigthLeft');
                mcImgBox_1.addClass('move_rigthLeft');
                mcTab_list.eq(0).addClass('on');
            }
            if(graphicDesign < scrollBottom){
                $("div.mcTextBoxInner").eq(1).addClass('move_leftRigth');
                mcTabBox_2.addClass('move_rigthLeft');
                mcImgBox_2.addClass('move_rigthLeft');
                $('ul#mcTab_2 li').eq(1).addClass('on');
            }
            if(softwareDevelop < scrollBottom){
                $("div.mcTextBoxInner").eq(2).addClass('move_leftRigth');
                mcTabBox_3.addClass('move_rigthLeft');
                mcImgBox_3.addClass('move_rigthLeft');
                $('ul#mcTab_3 li').eq(2).addClass('on');
            }
            if(homeOperate < scrollBottom){
                $("div.mcTextBoxInner").eq(3).addClass('move_leftRigth');
                mcTabBox_4.addClass('move_rigthLeft');
                mcImgBox_4.addClass('move_rigthLeft');
                $('ul#mcTab_4 li').eq(3).addClass('on');
            }
            if(marketing < scrollBottom){
                $("div.mcTextBoxInner").eq(4).addClass('move_leftRigth');
                mcTabBox_5.addClass('move_rigthLeft');
                mcImgBox_5.addClass('move_rigthLeft');
                $('ul#mcTab_5 li').eq(4).addClass('on');
            } 

            if(dsTextBox_top < scrollBottom){
                dsTextBox.addClass('move_up');
                $('div.ds_content_list01').addClass('move_up_1');
                $('div.ds_content_list02').addClass('move_up_2');
                $('div.ds_content_list03').addClass('move_up_3');
                $('div.ds_content_list04').addClass('move_up_4');
                $('div.ds_content_list05').addClass('move_up_5');
            }

            if(msTextBox_top < scrollBottom){
                msTextBox.addClass('move_up');
            }









})          

$(window).scroll(function(){
            var awardsTitle = $("section#awards div.awardTitle");
            var mcTab_list = $('div.mcWrap div.mcTabBox ul.mcTab li');
            var mcTab = $('div.mcWrap div.mcTabBox ul.mcTab');

            var scrollBottom = $(window).height() + $(window).scrollTop()+100;
            var win_height = $(document).height() - $(window).height();

            var awardsTop = $("section#awards").offset().top;
            var awardsTitle_1 = $("section#awards div.awardTitle").eq(0).offset().top;
            var awardsTitle_2 = $("section#awards div.awardTitle").eq(1).offset().top;
            var awardsTitle_3 = $("section#awards div.awardTitle").eq(3).offset().top;



            var homeMakeTop = $("div.mcTextBoxInner").eq(0).offset().top;
            var graphicDesign = $("div.mcTextBoxInner").eq(1).offset().top;
            var softwareDevelop = $("div.mcTextBoxInner").eq(2).offset().top;
            var homeOperate = $("div.mcTextBoxInner").eq(3).offset().top;
            var marketing = $("div.mcTextBoxInner").eq(4).offset().top;

            var mcTabBox_1 = $('div.mcWrap div.mcTabBox').eq(0);
            var mcTabBox_2 = $('div.mcWrap div.mcTabBox').eq(1);
            var mcTabBox_3 = $('div.mcWrap div.mcTabBox').eq(2);
            var mcTabBox_4 = $('div.mcWrap div.mcTabBox').eq(3);
            var mcTabBox_5 = $('div.mcWrap div.mcTabBox').eq(4);

            var mcImgBox_1 = $('div.mcImgBox').eq(0);
            var mcImgBox_2 = $('div.mcImgBox').eq(1);
            var mcImgBox_3 = $('div.mcImgBox').eq(2);
            var mcImgBox_4 = $('div.mcImgBox').eq(3);
            var mcImgBox_5 = $('div.mcImgBox').eq(4);
            
            var dsTextBox = $('div.dswrap div.dsTextBox');
            var dsTextBox_top = $('div.dswrap div.dsTextBox').offset().top;

            var msTextBox = $('div.msTextBox');
            var msTextBox_top = $('div.msTextBox').offset().top;

            if(awardsTitle_1 < scrollBottom){
                $("section#awards div.awardTitle").eq(0).addClass('move_leftRigth');
            }
            if(awardsTitle_2 < scrollBottom){
                $("section#awards div.awardTitle").eq(1).addClass('move_leftRigth');
            }
            if(awardsTitle_3 < scrollBottom){
                $("section#awards div.awardTitle").eq(3).addClass('move_leftRigth');
            }

            if(homeMakeTop < scrollBottom){
                $("div.mcTextBoxInner").eq(0).addClass('move_leftRigth');
                mcTabBox_1.addClass('move_rigthLeft');
                mcImgBox_1.addClass('move_rigthLeft');
                mcTab_list.eq(0).addClass('on');
            }
            if(graphicDesign < scrollBottom){
                $("div.mcTextBoxInner").eq(1).addClass('move_leftRigth');
                mcTabBox_2.addClass('move_rigthLeft');
                mcImgBox_2.addClass('move_rigthLeft');
                $('ul#mcTab_2 li').eq(1).addClass('on');
            }
            if(softwareDevelop < scrollBottom){
                $("div.mcTextBoxInner").eq(2).addClass('move_leftRigth');
                mcTabBox_3.addClass('move_rigthLeft');
                mcImgBox_3.addClass('move_rigthLeft');
                $('ul#mcTab_3 li').eq(2).addClass('on');
            }
            if(homeOperate < scrollBottom){
                $("div.mcTextBoxInner").eq(3).addClass('move_leftRigth');
                mcTabBox_4.addClass('move_rigthLeft');
                mcImgBox_4.addClass('move_rigthLeft');
                $('ul#mcTab_4 li').eq(3).addClass('on');
            }
            if(marketing < scrollBottom){
                $("div.mcTextBoxInner").eq(4).addClass('move_leftRigth');
                mcTabBox_5.addClass('move_rigthLeft');
                mcImgBox_5.addClass('move_rigthLeft');
                $('ul#mcTab_5 li').eq(4).addClass('on');
            } 

            if(dsTextBox_top < scrollBottom){
                dsTextBox.addClass('move_up');
                $('div.ds_content_list01').addClass('move_up_1');
                $('div.ds_content_list02').addClass('move_up_2');
                $('div.ds_content_list03').addClass('move_up_3');
                $('div.ds_content_list04').addClass('move_up_4');
                $('div.ds_content_list05').addClass('move_up_5');
            }

            if(msTextBox_top < scrollBottom){
                msTextBox.addClass('move_up');
            }

            
});