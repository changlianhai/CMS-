<template>
    <div>
        <div class="special_settings_area">
            <Button type="primary" class="special_add" @click="handleRender">新增专题</Button>
        </div>

        <!--  Table组件-->
        <Table border :columns="columns" :data="specialList"></Table>

        <!-- Page组件 -->
        <Page :total="length" :current="currentIndex" @on-change="pageIndexOnChange" show-elevator page-size=2></Page>


    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import tools from './../../API/tools';

    export default {
        name: "special",
        data() {
            return {
                currentIndex: 1,
                pageSize: 2,
                columns: [
                    {
                        title: '背景图',
                        align: 'center',
                        key: 'bgImg'
                    },
                    {
                        title: '类别',
                        align: 'center',
                        key: 'category',
                        size: 'small',
                        render: (h, params) => {
                            return tools.categoryChangeText(params.row.category);
                        }
                    },
                    {
                        title: '创建时间',
                        align: 'center',
                        key: 'gmtCreated',
                        render: (h, params) => {
                            return tools.formateTime(params.row.gmtCreated);
                        }
                    },
                    {
                        title: '修改时间',
                        align: 'center',
                        key: 'gmtModified',
                        size: 'large',
                        render: (h, params) => {
                            return tools.formateTime(params.row.gmtCreated);
                        }
                    },
                    {
                        title: 'icon图标',
                        align: 'center',
                        key: 'iconImg'
                    },
                    {
                        title: 'id号码',
                        align: 'center',
                        key: "id"
                    }, {
                        title: '名称',
                        align: 'center',
                        key: 'names'
                    },
                    {
                        title: '状态',
                        align: 'center',
                        key: 'status',
                        render: (h, params) => {
                            return tools.statusChangeText(params.row.status);
                        }
                    },
                    {
                        title: '简述',
                        align: 'center',
                        key: 'summary'
                    },
                    {
                        title: '模板类型',
                        key: 'templateCode',
                        render: (h, params) => {
                            return tools.templateTypeChagneText(params.row.templateCode);
                        }
                    },
                    {
                        title: '类型',
                        align: 'center',
                        key: 'type',
                        render: (h, params) => {
                            return tools.typeChangeText(params.row.type);
                        }
                    },
                    {
                        title: '操作',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            //删除
                                            this.$store.dispatch('Special/specailDelete', {id:params.row.id});
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ]
            }
        },
        created() {
            this.getSpecailList();
        },
        computed: {
            ...mapGetters({
                specialList: 'Special/specialList',
                length: 'Special/length'
            })
        },

        methods: {
            getSpecailList() {
                this.$store.dispatch('Special/getSpecailList', {pageNo: this.currentIndex, pageSize: this.pageSize});
            },
            pageIndexOnChange(index) {
                this.currentIndex = index;
                this.$store.dispatch('Special/getSpecailList', {pageNo: this.currentIndex, pageSize: this.pageSize});
            },
            handleRender() {
                this.$Modal.confirm({

                    render: (h) => {

                        return h('Select', {
                                props:{
                                    value: 11
                                },
                                on: {
                                    'on-change':(event) => {
                                    }
                                },
                            },
                            [
                                h('Option',{
                                    props: {
                                        value: '1'
                                    }
                                },'option1'),
                                h('Option',{
                                    props: {
                                        value: '2'
                                    }
                                },'option2')
                            ]
                        )






                        return h('div', [
                            h('div', '名称'),
                            h('Input', {
                            props: {
                                type: 'text',
                                placeholder:'111',
                                value: this.pageSize
                            },
                            style: {
                                width: '90%',
                                marginBottom: '25px',
                                marginTop: '5px'
                            },
                            on: {
                                'on-blur': (event) => {
                                }
                            }
                        }),
                            h('div', '入口图'),
                            h('Input', {
                                props: {
                                    type: 'text',
                                    placeholder:'111',

                                },
                                style: {
                                    width: '90%',
                                    marginBottom: '25px',
                                    marginTop: '5px'
                                },

                            }),

                            h('div', '背景图'),
                            h('Input', {
                                props: {
                                    type: 'text',
                                    placeholder:'111',

                                },
                                style: {
                                    width: '90%',
                                    marginBottom: '25px',
                                    marginTop: '5px'
                                },

                            }),
                            h('div', '阐述'),
                            h('Input', {
                                props: {
                                    type: 'text',
                                    placeholder:'111',

                                },
                                style: {
                                    width: '90%',
                                    marginBottom: '25px',
                                    marginTop: '5px'
                                },

                            }),
                            h('div', '专题类型'),
                            h('Select', {
                                props: {
                                    value: "74557",
                                },
                                style: {
                                    width: '90%',
                                    marginBottom: '25px',
                                    marginTop: '5px'
                                },

                            },
                                [h('Option',{
                                    props: {
                                        value: '1'
                                    }
                                },'option1'),
                                    h('Option',{
                                        props: {
                                            value: '2'
                                        }
                                    },'option2')
                                ]
                            ),
                            h('div', '模板类型'),
                            h('Input', {
                                props: {
                                    type: 'text',
                                    placeholder:'111',

                                },
                                style: {
                                    width: '90%',
                                    marginBottom: '25px',
                                    marginTop: '5px'
                                },

                            }),
                            h('div', '类别'),
                            h('Input', {
                                props: {
                                    type: 'text',
                                    placeholder:'111',

                                },
                                style: {
                                    width: '90%',
                                    marginBottom: '25px',
                                    marginTop: '5px'
                                },

                            }),
                            h('div', '入口图'),
                            h('Input', {
                                props: {
                                    type: 'text',
                                    placeholder:'111',

                                },
                                style: {
                                    width: '90%',
                                    marginBottom: '25px',
                                    marginTop: '5px'
                                },

                            })



                        ]);
                    }
                });
                document.querySelector('.ivu-modal').style.width = '800px';
            }
        }
    }
</script>

<style scoped>
    .special_settings_area {
        padding: 10px 50px;
    }

    .special_add {
        width: 130px;
    }

    .ivu-table td, .ivu-table th {
        text-align: center !important;
    }

    .ivu-page {
        position: absolute;
        right: 20px;
        margin-top: 30px;
    }
    .ivu-modal {
        width: 600px!important;
    }
    .ivu-input-type {
        width: 90%;
    }
</style>
