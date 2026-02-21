// Add functionality to the Hero button
document.addEventListener('DOMContentLoaded', () => {
    const heroBtn = document.querySelector('.hero button');
    
    heroBtn.addEventListener('click', () => {
        document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
    });

    // Dynamic Project Slider
    const slideTrack = document.querySelector('.slide-track');
    if (slideTrack) {
        const projects = [
            { 
                name: 'Jhefe', 
                tagline: 'Step Up Your Shoe Game',
                desc: 'Jhefe is a premium online shoe store that combines comfort, fashion, and durability. Whether you’re looking for casual sneakers, formal shoes, or sportswear, Jhefe has something for every step of your journey. With trend-focused designs and a smooth shopping experience, Jhefe ensures your feet are always dressed to impress.',
                img: 'shoe.jpeg',
                link: 'https://jhefe-shoe007.netlify.app/'
            },
            { 
                name: 'Oggy', 
                tagline: 'Fashion That Speaks',
                desc: 'Oggy is your online destination for stylish and contemporary clothing. From casual wear to elegant outfits, Oggy offers a wide range of apparel to suit every personality and occasion. With attention to quality, comfort, and the latest fashion trends, Oggy makes sure you always look your best effortlessly.',
                img: 'cloth.jpeg',
                link: 'https://oggy-cloth007.netlify.app/'
            },
            { 
                name: 'Redion', 
                tagline: 'Your Go-To Watch Store',
                desc: 'Redion is an e-commerce platform dedicated to watch enthusiasts. From sleek minimalist designs to bold statement pieces, Redion offers a curated collection for every style and occasion. With quality craftsmanship, trendy designs, and easy online shopping, it’s the perfect destination for keeping time in style.',
                img: 'watch.jpeg',
                link: 'https://redion-watch007.netlify.app/'
            }
        ];

        // Create 12 slides (3 projects repeated 4 times) for smooth infinite scroll
        for (let i = 0; i < 12; i++) {
            const project = projects[i % projects.length];
            const slide = document.createElement('div');
            slide.className = 'slide';
            
            slide.innerHTML = `
                <a href="${project.link}" target="_blank" class="project-link">
                    <div class="project-pic" style="background-image: url('${project.img}')" title="${project.desc}">
                        <strong>${project.name}</strong>
                        <small>${project.tagline}</small>
                    </div>
                </a>
            `;
            slideTrack.appendChild(slide);
        }
    }
});