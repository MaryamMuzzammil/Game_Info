import '../../../../assets/css/About/ytvideo.css';
const YouTube =()=>{
    return(
        <>
         <section class=" youtube">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 mt-4 text-center" data-aos="fade-right"
                         data-aos-easing="linear"
                         data-aos-duration="800">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/vjalx7-phQo?si=APDXlmFnB5fbhysd&controls=0" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section> 
        </>
    )
};
export default YouTube;