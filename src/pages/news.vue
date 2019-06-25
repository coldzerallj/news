<template>
    <div>
        <news-top></news-top>
        <news-main></news-main>
    </div>
</template>
<script>
import NewsTop from '@/components/news/news-top'
import NewsMain from '@/components/news/news-main'

export default {
    components: {
       NewsTop, 
       NewsMain,
    },
   
}
</script>
