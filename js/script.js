import { levenhstein } from "./levenhstein.js";

$(function ()
{
    const liElements = $("#search-lists").children('li');
    const defaultState = $("#search-lists").html();

    $("#search-box").on('input', function (e)
    {
        const keyword = e.target.value.toLowerCase();
        const matchingElements = [];
        const nonMatchingElements = [];
        const MINIMAL_DISTANCE = 3;

        const Distance = (e) =>
        {
            return parseInt(e.innerText.toLowerCase().replace(/[a-zA-Z\']/g, '').trim())
        }

        if (keyword !== "")
        {
            $.each(liElements, (key, li) => 
            {
                const elementText = li.innerText.toLowerCase().replace(/[0-9]/g, '').trim();

                // FIRST CHECK EACH ITEM OVERALL SIMILARITY USING includes()
                if (elementText.includes(keyword))
                {
                    // CHANGE TOTAL CHARACTER DIFFERENCES (DISTANCE)
                    $(li.children).each(function ()
                    {
                        $(this).children('span').last().html(levenhstein(keyword, elementText));
                    });

                    matchingElements.push(li);
                }
                // IF CHARACTERS ARE OUT OF TRACK, THEN CHECK USING levenhstein() TO COUNT CHARACTER DIFFERENCES
                else
                {
                    if (levenhstein(keyword, elementText) <= MINIMAL_DISTANCE)
                    {
                        // CHANGE TOTAL CHARACTER DIFFERENCES
                        $(li.children).each(function ()
                        {
                            $(this).children('span').last().html(levenhstein(keyword, elementText));
                        });

                        nonMatchingElements.push(li);
                    }
                }
            })

            $("#search-lists").html("");

            if (matchingElements.length > 0 || matchingElements.length > 0 && nonMatchingElements.length > 0)
            {
                $("#not-found").hasClass("is-hidden") ? "" : $("#not-found").addClass("is-hidden")
                $("#no-result").hasClass("is-hidden") ? "" : $("#no-result").addClass("is-hidden")

                // SORT THE ELEMENTS BY COMPARING THE DISTANCE
                matchingElements.sort((a, b) => Distance(a) - Distance(b));

                $.each(matchingElements, (key, value) =>
                {
                    $("#search-lists").append(value);
                })
            }
            else if (nonMatchingElements.length > 0)
            {
                $("#not-found").hasClass("is-hidden") ? $("#not-found").removeClass("is-hidden") : ""
                $("#no-result").hasClass("is-hidden") ? "" : $("#no-result").addClass("is-hidden")

                // SORT THE ELEMENTS BY COMPARING THE DISTANCE
                nonMatchingElements.sort((a, b) => Distance(a) - Distance(b));

                $.each(nonMatchingElements, (key, value) =>
                {
                    $("#search-lists").append(value);
                })
            }
            else
            {
                $("#not-found").addClass("is-hidden")
                $("#no-result").removeClass("is-hidden")
            }
        }
        else
        {
            $("#search-lists").html(defaultState)
            $("#not-found").addClass("is-hidden")
            $("#no-result").addClass("is-hidden")
        }
    })
})