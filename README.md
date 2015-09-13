# jquery-listslider
Plugin  makes horizontal lists to collapse if they don't have enough space, then shows pagination allowing to slide or swipe
to see hidden elements. 


List when there is enough horizontal space in container for it

![alt tag](https://cloud.githubusercontent.com/assets/4959057/9834163/86dc96ac-59af-11e5-814f-e8fb5700fb5a.png)



List when there is not enough space

![alt tag](https://cloud.githubusercontent.com/assets/4959057/9834162/86db71dc-59af-11e5-908b-dbc1a9edbdb6.png)


usage: 


    <ul class="my-listslider">
        <li>Ziomek</li>
        <li>Romek</li>
        <li>Atomek</li>
        <li>Lizus</li>
        <li>Mizus</li>
        <li>foo</li>
    </ul>

    <script>
        $('.my-listslider').listslider({
            left_label: '<<',
            right_label: '>>'
        });
    </script>

Requires jquery

demo in index.html


Fiddle:

https://jsfiddle.net/hcxke4s4/
