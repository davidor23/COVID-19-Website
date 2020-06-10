function onSubmit() {
    var test = [true,true,false]
    console.log(test)
    document.getElementById("results").innerHTML

    var q1 = [];
    var q2 = [];
    var q3 = [];
    var q4 = [];
    var q5 = [];

    $("input:radio[name=q1]").each(function () {
        if($(this).prop("checked") == true){
            q1.push(true)
        }
        else {
            q1.push(false)
        }

    });

    console.log(q1.valueOf())

    $('input:radio[name=q2]:checked').each(function () {
        q2.push($(this).valueOf())

    });
    $("input:radio[name=q2]").each(function () {
        if($(this).prop("checked") == true){
            q2.push(true)
        }
        else {
            q2.push(false)
        }

    });

    console.log(q2.valueOf())
    $('input:radio[name=q3]:checked').each(function () {
        q3.push($(this).valueOf())
        $("input:radio[name=q3]").each(function () {
            if($(this).prop("checked") == true){
                q3.push(true)
            }
            else {
                q3.push(false)
            }

        });

        console.log(q3.valueOf())

    });
    $("input:radio[name=q4]:checked").each(function () {
        q4.push($(this).valueOf())
        $("input:radio[name=q4]").each(function () {
            if($(this).prop("checked") == true){
                q4.push(true)
            }
            else {
                q4.push(false)
            }

        });

        console.log(q4.valueOf())
    });

    $("input:checkbox[name=q5]:checked").each(function () {
        q5.push($(this).valueOf())

    });
    console.log(q5.toString())
    for (var i = 0; i < q2; i++) {
        if (q2[i] == true && i >= 4) {
            if (q3[0] == true) {
                document.getElementById("results-head").valueOf() = "Your Results: You should seek medical assistance"
            }
        }
    }
}