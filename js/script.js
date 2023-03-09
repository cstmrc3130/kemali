import { levenhstein } from "./levenhstein.js";

$(function ()
{
    const liElements = $("#search-lists").children('li');
    const defaultState = $("#search-lists").html();

    $("#search-box").on('keyup', function (e)
    {
        const keyword = e.target.value.toLowerCase();
        const elements = new Array();
        const MINIMAL_DISTANCE = 3;

        const Distance = (e) =>
        {
            return parseInt(e.innerText.toLowerCase().replace(/[a-zA-Z\']/g, '').trim())
        }

        if (keyword !== "")
        {
            $.each(liElements, (key, element) => 
            {
                const elementText = element.innerText.toLowerCase().replace(/[0-9]/g, '').trim();

                // FIRST CHECK EACH ITEM OVERALL SIMILARITY USING contains()
                if (elementText.includes(keyword))
                {
                    $("#not-found").hasClass("is-hidden") ? "" : $("#not-found").addClass("is-hidden")

                    // CHANGE TOTAL CHARACTER DIFFERENCES (DISTANCE)
                    $(element.children).each(function ()
                    {
                        $(this).children('span').last().html(levenhstein(keyword, elementText));
                    });

                    // element.style.display = "block"
                    elements.push(element);
                }
                // IF CHARACTERS ARE OUT OF TRACK, THEN CHECK USING levenhstein() TO COUNT CHARACTER DIFFERENCES
                else
                {
                    if (levenhstein(keyword, elementText) <= MINIMAL_DISTANCE)
                    {
                        $("#not-found").hasClass("is-hidden") ? $("#not-found").removeClass("is-hidden") : ""

                        // CHANGE TOTAL CHARACTER DIFFERENCES
                        $(element.children).each(function ()
                        {
                            $(this).children('span').last().html(levenhstein(keyword, elementText));
                        });

                        // element.style.display = "block"
                        elements.push(element);
                    }
                }
            })

            // SORT THE ELEMENTS BY COMPARING THE DISTANCE
            elements.sort((a, b) => Distance(a) - Distance(b));

            $("#search-lists").html("");

            $.each(elements, (key, value) =>
            {
                $("#search-lists").append(value);
            })
        }
        else
        {
            $("#search-lists").html(defaultState)
        }
    })
})