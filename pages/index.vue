<template>
  <div class="min-h-screen  flex justify-center items-center py-20">
    <div class="container mx-auto p-12 bg-gray-100 rounded-xl">
      <form action="" @submit.prevent="search()" class="mt-6">
        <div class="w-96 mx-auto">
          <input type="text" placeholder="Tìm kiếm" class="w-2/3 h-10 text-center mb-6" v-model="keyword" >
        </div>
        <!-- Box-1 -->
        <div v-if="listArticle.length>0">
          <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
            <div v-for="( articleItem,articleIndex ) in listArticle" :key="articleIndex" class="bg-white">
              <div>
                <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                  <div>
                    <img class="w-full" :src="articleItem.urlToImage"/>
                    <div class="px-4 py-2">
                      <h1 class="text-xl font-gray-700 font-bold">{{ articleItem.author }}</h1>
                      <div class="flex space-x-2 mt-2 w-full">
                        <a :href="articleItem.url" class="text-lg text-blue-600 font-semibold mb-2 w-full text-center">{{ articleItem.title }}</a>
                      </div>
                      <p class="text-sm tracking-normal ">{{ articleItem.content }}</p>
                      <p class="text-sm tracking-normal text-gray-500">{{ articleItem.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      keyword: '',
      listArticle: [],
    }
  },
  methods: {
    async search() {
      try {
        const resp = await this.$repositories.home.getArticles(this.keyword);
        this.listArticle = resp.data.articles;
        this.keyword = '';
      } catch (e) {
        console.log(e);
      }
    },
  },
}
</script>
