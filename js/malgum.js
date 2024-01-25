$(function(){

    // index 페이지의 메인 시계 함수
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

    // 네비게이션 바에서 마우스 떠 날 때 함수 
    $("html").mouseleave(function(){
     serviceDept2.hide();
     dept2Wrap.hide();
    })
            /*pc 화면 gnb function*/
            var gnbL_li = $("li.gnbL_li");
            var gnbR_li = $("li.gnbR_li");
            var serviceDept2 = $("div.serviceDept2");
            var dept2Wrap = $("div.dept2Wrap")
            var dept2_li = $("ul.dept2 > li");
            var dept3_li = $("ul.dept3 > li");

            /*서비스 소개 호버시 메소드*/
            serviceDept2.mouseover(function(){
                gnbL_li.eq(0).addClass('nav_on');
            })
            serviceDept2.mouseleave(function(){
                serviceDept2.hide();
                gnbL_li.removeClass('nav_on');
                dept2_li.removeClass('nav_on');
            })
            dept2_li.mouseover(function(){
                var tg = $(this);
                var i = tg.index();
                dept2_li.removeClass('nav_on');
                dept2_li.eq(i).addClass('nav_on');
            })
            

            /*gnbL_li jquery*/
            gnbL_li.mouseover(function(){
                var tg = $(this);
                var i = tg.index();

                gnbL_li.eq(i).addClass('nav_on');
                if(i == 0){
                    serviceDept2.show();
                    $("div.dw_1").hide();
                    $("div.dw_2").hide();
                      
                }
                if(i == 1){
                    $("div.dw_1").show();
                    serviceDept2.hide();
                }
                if(i == 2){
                    $("div.dw_2").show();
                    serviceDept2.hide();
                }
            })
            gnbL_li.mouseleave(function(){
                $("div.dw_1").hide();
                $("div.dw_2").hide();
                gnbL_li.removeClass('nav_on');
            })


            gnbR_li.mouseover(function(){
                var tg = $(this);
                var i = tg.index();
                gnbR_li.eq(i).addClass('nav_on');
                if(i == 0){
                    $("div.dw_3").show();
                }
                if(i == 1){
                    $("div.dw_4").show();
                }
            })
            gnbR_li.mouseleave(function(){
                $("div.dw_3").hide();
                $("div.dw_4").hide();
                gnbR_li.removeClass('nav_on');
            })

            /****************************
               모바일 화면  nav fucntion
            *****************************/
            let burgerBtn = $("a.hambergerBtn span.burgerBtn");
            let closeBtn = $("a.hambergerBtn span.closeBtn")
            let gnb_m = $("div#gnb_m_wrap> ul.gnb_m");
            let gnb_m_li = $("ul.gnb_m>li");
            let gnb_m_dept2 = $("ul.gnb_m_dept2");
            let gnb_m_dept2_li = $("ul.gnb_m_dept2>li");
            let gnb_m_dept2_li_bg_blue2 = $("ul.gnb_m_dept2>li.bg_blue2");
            let gnb_m_dept2_li_a = $("ul.gnb_m_dept2>li>a");
            let gnb_m_dept3 = $("ul.gnb_m_dept3");

            closeBtn.hide();
            // gnb_m.hide();
           gnb_m_dept2.hide();
           gnb_m_dept3.hide();
             //햄버거 버튼 클릭 시 nav 보이게하기
            burgerBtn.click(function(){
                gnb_m.addClass("on");
                gnb_m.addClass('go');
                burgerBtn.hide();
                closeBtn.fadeIn();
            })
            closeBtn.click(function(){
                gnb_m.removeClass("on");
                gnb_m.removeClass("go");
                burgerBtn.fadeIn();
                closeBtn.fadeOut();
            })

            // 모바일 네비게이션 클릭 시 index() 따와서 dept2 open
            gnb_m_li.click(function(){
                let target = $(this);
                let i = target.index();

               
               
                //클릭한 li 배경색 파랑으로 
               
                if(gnb_m_li.eq(i).hasClass('bg_blue1') ){
                    // gnb_m_li.eq(i).removeClass('bg_blue1');    
                } else {
                    gnb_m_li.removeClass('bg_blue1');
                    gnb_m_li.eq(i).addClass('bg_blue1');
                }



            })

            //모바일 네비게이션 클릭 시 index() 따와서 dept3 open
            gnb_m_dept2_li.click(function(){
                let tg = $(this);
                let i = tg.index();
                
                
                var num = -1
                while( num < 5){
                    if( num != i){
                        gnb_m_dept2_li.eq(num).removeClass('bg_blue2');
                    } 

                    num++
                }
                gnb_m_dept2_li.eq(i).toggleClass('bg_blue2');
                
                
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

/*브라우저 스크롤 시 발생되는 애니메이션 추가 */
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
                $("section#awards div.awardTitle").eq(2).addClass('move_leftRigth');
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