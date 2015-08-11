jQuery.fn.extend({

    listslider: function(config){

        var global = {};
        global.config = config;

        for(var i = 0 ; i < this.length ; i++){
            initListsliderFor($(this[i]));
        }

        function initListsliderFor(element){

            var self = this;

            self.getSummedWidthOfListItems = function(){
                var sum = 0;
                var list_items = self.ul.find('li');
                for (var i = 0 ; i < list_items.length ; i++){
                    sum += $(list_items[i]).outerWidth();
                }
                return sum + 10;
            };

            self.setupParentDiv = function(){
                self.parent = self.ul.parent();
                self.parent.css('position', 'relative');
            };

            self.showPaginationIfWrapperIsHidden = function(){
                var wrapper_width = self.getSummedWidthOfListItems();
                if(self.parent.width() < wrapper_width){
                    self.parent.find('.listslider-arrow').addClass('active');
                }  else{
                    self.parent.find('.listslider-arrow').removeClass('active');
                }
            };

            self.addWrapper = function(){
                self.ul.wrap('<div class="listslider-container"><div class="listslider-wrapper"></div></div>');
                self.wrapper = $(self.ul.closest('.listslider-wrapper'));
                var wrapper_width = self.getSummedWidthOfListItems();
                self.wrapper.css('width', wrapper_width + 'px');
            };

            self.addContainer = function(){
                self.container = $(self.ul.closest('.listslider-container'));
            };

            self.addArrows = function(){
                self.parent.append('<div class="listslider-left listslider-arrow">left</div>');
                self.parent.append('<div class="listslider-right listslider-arrow">right</div>');

                self.right_arrow = $('.listslider-right.listslider-arrow');
                self.left_arrow = $('.listslider-left.listslider-arrow');
            };

            self.ul = $(element);
            self.ul.addClass('listslider');

            self.setupParentDiv();
            self.addWrapper();
            self.addContainer();
            self.addArrows();


            self.showPaginationIfWrapperIsHidden();

            $(window).on('resize', function(){
                self.showPaginationIfWrapperIsHidden();
            });

            $('.listslider-arrow').on('click', function(){
                var step = 100;
                if($(this).hasClass('listslider-left')){
                    self.container.scrollLeft(self.container.scrollLeft() - step);
                }else{
                    self.container.scrollLeft(self.container.scrollLeft() + step);
                }
            });
        }
    }
});