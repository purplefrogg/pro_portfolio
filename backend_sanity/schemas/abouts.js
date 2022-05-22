export default {
    name: 'abouts',
    title: 'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title: 'Title',
            type:'string'
        },        {
            name:'describtion',
            title: 'Description',
            type:'string'
        },        {
            name:'imageurl',
            title: 'ImgURL',
            type:'image',
            options:{
                hotspot: true
            }
        },   
    ]
}