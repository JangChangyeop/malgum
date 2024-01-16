$(function(){
        let wa_cont5_list = $("div.wa_cont5_list");
        let wa_cont5_list_txt = $("div.wa_cont5_list_txt");
        let wa_cont5_list_txt_h5 = $("div.wa_cont5_list_txt>h5");
        let wa_cont5_list_txt_active_h5 = $("div.active>h5");
        let list_txt_content = $("div.active> div.list_txt_content");
        let wa_cont5_content_li = $("div.wa_cont5_content ul li");

        
        wa_cont5_content_li.mouseover(function(){
            let tg = $(this);
            let i = tg.index();

            wa_cont5_content_li.eq(i).find("div.wa_cont5_list_txt").addClass("active");
            wa_cont5_content_li.eq(i).find("div.wa_cont5_list_txt").removeClass("wa_cont5_list_txt_h5");
            wa_cont5_content_li.eq(i).find("div.wa_cont5_list_txt>h5").removeClass("wa_cont5_list_txt_h5");
        })

        wa_cont5_content_li.mouseleave(function(){
            wa_cont5_list_txt.removeClass("active");
            wa_cont5_list_txt_h5.addClass("wa_cont5_list_txt_h5");
        })
        
        /*브라우저 스크롤 시 발생되는 애니메이션 추가 */
         
})     

/*브라우저 스크롤 시 발생되는 애니메이션 추가 */
$(window).scroll(function(){
          
});