<main class="devwebcamp">
    <h2 class="devwebcamp__heading"><?php echo $titulo; ?></h2>
    <p class="devwebcamp__descripcion">Conoce la conferencia más importante de Latinoamérica</p>

    <div class="devwebcamp__grid">
        <div <?php aos_animacion(); ?> class="devwebcamp__imagen">
            <picture>
                <source srcset="build/img/sobre_devwebcamp.avif" type="image/avif">
                <source srcset="build/img/sobre_devwebcamp.webp" type="image/webp">
                <img loading="lazy" width="200" height="300" src="build/img/sobre_devwebcamp.jpg" alt="Imagen DevWebCamp">
            </picture>
        </div>

        <div class="devwebcamp__contenido">
            <p <?php aos_animacion(); ?> class="devwebcamp__texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore vero, dicta culpa quisquam molestiae, rem dolor nesciunt, accusamus in illo sit consequuntur adipisci libero?</p>
            <p <?php aos_animacion(); ?> class="devwebcamp__texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore vero, dicta culpa quisquam molestiae, rem dolor nesciunt, accusamus in illo sit consequuntur adipisci libero?</p>
            
        </div>
    </div>
</main>