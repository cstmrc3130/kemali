$(function ()
{
    const URLRegex = new RegExp('^(https?:\\/\\/)?' + // PROTOCOL
        '((([a-zA-Z\\d]([a-zA-Z\\d-]{0,61}[a-zA-Z\\d])?)\\.)+[a-zA-Z]{2,}|' + // DOMAIN NAME
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IPv4 ADDRESS
        '(\\:\\d+)?' + // PORT
        '(\\/[-a-zA-Z\\d%@_.~+&:]*)*' + // PATH
        '(\\?[;&a-zA-Z\\d%@_.,~+&:=-]*)?' + // QUERY STRING
        '(\\#[-a-zA-Z\\d_]*)?$', 'i'); // FRAGMENT LOCATOR
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]\\:;'<>,.?/])(?=.*[a-zA-Z]).{8,}$/;
    const IPRegex = new RegExp(`^\\d+(?:\\.\\d+){3}(?::\\d+)?$`)
    const UUIDRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[8|9|aA|bB][0-9a-f]{3}-[0-9a-f]{12}$/i;
    const duplicateRegex = /(\b\w+\b)(?=.*\b\1\b)/gi;

    $('input').each(function ()
    {
        $(this).on('focus', function ()
        {
            $(this).closest($('article')).addClass('shadow-sm shadow-indigo-300')
        })

        $(this).on('blur', function ()
        {
            $(this).closest($('article')).removeClass('shadow-sm shadow-indigo-300')
        })

        $(this).on('input', function ()
        {
            const pElement = $(this).parent().siblings().filter('p');

            if ($(this).attr('id') == 'url-regex')
            {
                if (URLRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Valid URL')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('Invalid URL! Must be a direct link or IPv4 address.')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "password-regex")
            {
                if (passwordRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Password is strong 💪')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('Password is not strong enough, try to add some special chars!')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "ip-regex")
            {
                if (IPRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Valid IP adress')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('Invalid IP address, try 192.168.100.1:2')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "uuid-regex")
            {
                if (UUIDRegex.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Valid v4 UUID')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('Invalid v4 UUID! Must match (xxxxxxxx-xxxx-4xxx-Yxxx-xxxxxxxxxxxx).')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "duplicate-regex")
            {
                const isMatch = $(this).val().match(duplicateRegex);

                if (isMatch)
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('Found ' + isMatch.length + (isMatch.length < 2 ? ' duplicate' : ' duplicates') + ' &#128530')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('There are no duplicates &#128512')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
            }
        })
    })
})