<template>
    <div id="recmd_page_content" style="min-width: 1280px">
        <Row>
            <Col span="6" class="box">
                <div class="tree">
                    <Card>
                        <p slot="title">渠道</p>
                        <Tree :data="baseData"  @on-toggle-expand="onToggleExpand" @on-select-change="onCheckChange" ></Tree>
                    </Card>
                </div>
            </Col>
            <Col span="17" style="float:right">
                <div class="search-bar-container">
                    <div class="btn-container" style="float: right;">
                        <DatePicker type="daterange" placement="bottom-end" placeholder="请选择日期" style="width: 200px" @on-change="date"></DatePicker>
                        <TimePicker confirm type="timerange" placement="bottom-end" placeholder="请选择时间" style="width: 200px" @on-change="time"></TimePicker>
                        <Input  placeholder="请输入设备编号" style="width: 300px" v-model="idDevice"></Input>
                        <Button type="primary" icon="ios-search" @click="search">搜索</Button>
                    </div>
                </div>
                <Table stripe :columns="columns" :data="deviceData" style="margin: 4px 0"></Table>
                <div style="margin: 10px;">
                    <Page :total="length" :current="currentIndex" @on-change="pageIndexOnChange" show-elevator></Page>
                </div>
            </Col>
        </Row>
    </div>
</template>
<style scoped>
    #recmd_page_content {
        min-width: 910px;
        height: 100%;
    }

    .ivu-row {
        height:	100%;
    }

    .search-bar-container {
        position: relative;
        padding: 8px 0;
        width: 100%;
        height: 50px;
    }

    .search-bar-container .query-set-container {
        float: left;
    }

    .search-bar-container span {
        margin-left: 4px;
    }

    .search-bar-container .btn-container {
        float: left;
    }


    .search-bar {
        width: 100%;
        padding: 4px 0 10px 0;
        height: 40px;
    }

    .search-bar .query-set-container {
        float: left;
    }

    .search-bar span {
        margin-left: 4px;
    }

    .search-bar .btn-container {
        float: right;
    }

    .box {
        height:100%;
    }

    .tree {
        overflow: auto;
        height:95%;
        width:100%;
    }
</style>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                idChannel: '',
                hasSon: '',
                baseData: [],
                children: [],
                startDate: '',
                endDate: '',
                startTime: '',
                endTime: '',
                currentIndex: 1,
                columns: [
                    { title: '创建时间', render: (h, params) => {
                            return h('span', this.$methods.formatDateTime(params.row.created));
                        }},
                    { title: '渠道编号', key: 'idChannel' },
                    { title: '设备编号', key: 'idDevice' },
                ],
                idDevice: ''
            }
        },
        created() {
            this.loadSubjectList('0');
        },
        computed: {
            ...mapGetters({
                deviceData: 'DeviceSearch/deviceData',
                channelData: 'Channel/channelData',
                length: 'DeviceSearch/length'
            })
        },
        watch: {
            channelData: function(n){
                if(this.baseData.length == 0){
                    this.baseData = n;
                    this.grouping(this.baseData)
                }else{
                    this.children = n;
                    let baseData = {baseData: this.baseData};
                    this.js_traverse(baseData)
                    //console.log(baseData);
                }
            }
        },
        methods: {
            js_traverse(baseData){
                var type = typeof baseData;
                if (type == "object") {
                    for (var key in baseData) {
                        //console.log("key: ", key)
                        if(key == 'id'){
                            if(this.children.length > 0 && baseData.id == this.children[0].idFather){
                                baseData.children = [];
                                for (let [key, val] of Object.entries(this.children)) {
                                    baseData.children.push({
                                        id: val.id,
                                        idFather: val.idFather,
                                        hasSon: val.hasSon,
                                        title: val.name,
                                        children: val.hasSon ? [{title: '请稍等...'}] : []
                                    });
                                };
                            }
                        }
                        this.js_traverse(baseData[key])
                    }
                } else {
                    //console.log(baseData)
                }
            },
            loadSubjectList(idFather) {
                this.$store.dispatch('Channel/getAllChannels', { idFather });
            },
            date(e) {
                this.startDate = e[0];
                this.endDate = e[1];
            },
            time(e) {
                this.startTime = e[0];
                this.endTime = e[1];
            },
            search() {
                let start = '';
                let end = '';
                if(this.startDate !== '' && this.endDate !== '') {
                    start = this.startDate+' '+(this.startTime === '' ? '00:00:00' : this.startTime);
                    end = this.endDate+' '+(this.endTime === '' ? '00:00:00' : this.endTime);
                }
                if(this.startTime !== '') {
                    this.instance('请输入查询的日期');
                    return;
                }
                this.$store.dispatch('DeviceSearch/getAllDevice', { idDevice:this.idDevice, page:`${this.currentIndex-1}`, size:'10', start, end });
            },
            instance (txt) {
                const content = `<h3>${txt}</h3>`;
                this.$Modal.warning({
                    content: content
                });
            },
            pageIndexOnChange(index) {
                this.loadSubjectLists(index);
            },
            loadSubjectLists(index) {
                this.currentIndex = index;
                this.$store.dispatch('DeviceSearch/getAllDevice', { idChannel:this.idChannel, page:`${this.currentIndex-1}`, size:'10' });
            },
            grouping(obj) {
                //let obj1 = [];
                let arr = [];
                let baseData = []
                for (let [key, val] of Object.entries(obj)) {
                    baseData.push({
                        id: val.id,
                        idFather: val.idFather,
                        hasSon: val.hasSon,
                        title: val.name,
                        children: val.hasSon ? [{title: '请稍等...'}] : []
                    });
                };
                this.baseData = baseData;
            },
            onToggleExpand(e) {
                if(e.expand){
                    this.loadSubjectList(e.id)
                }
            },
            onCheckChange(e) {
                if(e.length === 0){
                    this.idChannel = '';
                    return
                }
                this.idChannel = e[0].id;
                this.hasSon = e[0].hasSon;
                this.currentIndex = 1;
                this.$store.dispatch('DeviceSearch/getAllDevice', { idChannel:e[0].id, page:`${this.currentIndex-1}`, size:'10' });
            }
        }
    }

</script>


<script>
    render: (h, params) => {
        return h('Select', {
                props:{
                    value: this.data[params.index].volumeType,
                },
                on: {
                    'on-change':(event) => {
                        this.data[params.index].volumeType = event;
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
    }
</script>