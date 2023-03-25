document.addEventListener('DOMContentLoaded', function ()
{
    document.getElementById('burger-icon').addEventListener('click', function ()
    {
        const dropdown = document.getElementById('dropdown')

        this.firstElementChild.classList.toggle('block')
        this.firstElementChild.classList.toggle('hidden')

        this.lastElementChild.classList.toggle('hidden')
        this.lastElementChild.classList.toggle('block')

        if (dropdown.classList.contains('hidden'))
        {
            dropdown.classList.toggle('hidden')

            setTimeout(function ()
            {
                dropdown.parentElement.classList.toggle('mt-0')
                dropdown.parentElement.classList.toggle('mt-2')

                dropdown.classList.toggle('opacity-0')
                dropdown.classList.toggle('opacity-100')
            }, 100);
        }
        else
        {
            dropdown.parentElement.classList.toggle('mt-0')
            dropdown.parentElement.classList.toggle('mt-2')

            dropdown.classList.toggle('opacity-0')
            dropdown.classList.toggle('opacity-100')

            setTimeout(function ()
            {
                dropdown.classList.toggle('hidden')
            }, 100);
        }
    })
});

document.addEventListener("alpine:init", () =>
{
    Alpine.data("select", () => ({
        open: false,
        language: "",

        toggle()
        {
            this.open = !this.open;
        },

        setLanguage(val)
        {
            this.language = val;
            this.open = false;
        },
    }));

    Alpine.data("modal", () => ({
        open: false,
        language: "",

        toggle()
        {
            this.open = !this.open;
        },

        setLanguage(val)
        {
            this.language = val;
            this.open = false;
        },
    }));
});