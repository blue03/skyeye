/*!

 @Title: Layui
 @Description：经典模块化前端框架

 */

var fileBasePath = getBaseRootPath();//上传文件展示路径
var reqBasePath = getBaseRootPath();
var basePath = "../../assets/lib/winui/";
var skyeyeVersion = "1.0.0-beta";
var filePicType = ['png', 'jpg', 'gif', 'jpeg', 'PNG', 'JPG', 'GIF', 'JPEG'];
var fileDocType = ['txt', 'docx', 'doc', 'xlsx', 'xls', 'pdf', 'ppt', 'TXT', 'DOCX', 'DOC', 'XLSX', 'XLS', 'PDF', 'PPT'];

var addrs = [{provinceId:"110000",province:"北京市",citys:[{cityId:"110100",city:"市辖区",areas:[{areaId:"110101",area:"东城区"},{areaId:"110102",area:"西城区"},{areaId:"110103",area:"崇文区"},{areaId:"110104",area:"宣武区"},{areaId:"110105",area:"朝阳区"},{areaId:"110106",area:"丰台区"},{areaId:"110107",area:"石景山区"},{areaId:"110108",area:"海淀区"},{areaId:"110109",area:"门头沟区"},{areaId:"110111",area:"房山区"},{areaId:"110112",area:"通州区"},{areaId:"110113",area:"顺义区"},{areaId:"110114",area:"昌平区"},{areaId:"110115",area:"大兴区"},{areaId:"110116",area:"怀柔区"},{areaId:"110117",area:"平谷区"}]},{cityId:"110200",city:"县",areas:[{areaId:"110228",area:"密云县"},{areaId:"110229",area:"延庆县"}]}]},{provinceId:"120000",province:"天津市",citys:[{cityId:"120100",city:"市辖区",areas:[{areaId:"120101",area:"和平区"},{areaId:"120102",area:"河东区"},{areaId:"120103",area:"河西区"},{areaId:"120104",area:"南开区"},{areaId:"120105",area:"河北区"},{areaId:"120106",area:"红桥区"},{areaId:"120107",area:"塘沽区"},{areaId:"120108",area:"汉沽区"},{areaId:"120109",area:"大港区"},{areaId:"120110",area:"东丽区"},{areaId:"120111",area:"西青区"},{areaId:"120112",area:"津南区"},{areaId:"120113",area:"北辰区"},{areaId:"120114",area:"武清区"},{areaId:"120115",area:"宝坻区"}]},{cityId:"120200",city:"县",areas:[{areaId:"120221",area:"宁河县"},{areaId:"120223",area:"静海县"},{areaId:"120225",area:"蓟　县"}]}]},{provinceId:"130000",province:"河北省",citys:[{cityId:"130100",city:"石家庄市",areas:[{areaId:"130101",area:"市辖区"},{areaId:"130102",area:"长安区"},{areaId:"130103",area:"桥东区"},{areaId:"130104",area:"桥西区"},{areaId:"130105",area:"新华区"},{areaId:"130107",area:"井陉矿区"},{areaId:"130108",area:"裕华区"},{areaId:"130121",area:"井陉县"},{areaId:"130123",area:"正定县"},{areaId:"130124",area:"栾城县"},{areaId:"130125",area:"行唐县"},{areaId:"130126",area:"灵寿县"},{areaId:"130127",area:"高邑县"},{areaId:"130128",area:"深泽县"},{areaId:"130129",area:"赞皇县"},{areaId:"130130",area:"无极县"},{areaId:"130131",area:"平山县"},{areaId:"130132",area:"元氏县"},{areaId:"130133",area:"赵　县"},{areaId:"130181",area:"辛集市"},{areaId:"130182",area:"藁城市"},{areaId:"130183",area:"晋州市"},{areaId:"130184",area:"新乐市"},{areaId:"130185",area:"鹿泉市"}]},{cityId:"130200",city:"唐山市",areas:[{areaId:"130201",area:"市辖区"},{areaId:"130202",area:"路南区"},{areaId:"130203",area:"路北区"},{areaId:"130204",area:"古冶区"},{areaId:"130205",area:"开平区"},{areaId:"130207",area:"丰南区"},{areaId:"130208",area:"丰润区"},{areaId:"130223",area:"滦　县"},{areaId:"130224",area:"滦南县"},{areaId:"130225",area:"乐亭县"},{areaId:"130227",area:"迁西县"},{areaId:"130229",area:"玉田县"},{areaId:"130230",area:"唐海县"},{areaId:"130281",area:"遵化市"},{areaId:"130283",area:"迁安市"}]},{cityId:"130300",city:"秦皇岛市",areas:[{areaId:"130301",area:"市辖区"},{areaId:"130302",area:"海港区"},{areaId:"130303",area:"山海关区"},{areaId:"130304",area:"北戴河区"},{areaId:"130321",area:"青龙满族自治县"},{areaId:"130322",area:"昌黎县"},{areaId:"130323",area:"抚宁县"},{areaId:"130324",area:"卢龙县"}]},{cityId:"130400",city:"邯郸市",areas:[{areaId:"130401",area:"市辖区"},{areaId:"130402",area:"邯山区"},{areaId:"130403",area:"丛台区"},{areaId:"130404",area:"复兴区"},{areaId:"130406",area:"峰峰矿区"},{areaId:"130421",area:"邯郸县"},{areaId:"130423",area:"临漳县"},{areaId:"130424",area:"成安县"},{areaId:"130425",area:"大名县"},{areaId:"130426",area:"涉　县"},{areaId:"130427",area:"磁　县"},{areaId:"130428",area:"肥乡县"},{areaId:"130429",area:"永年县"},{areaId:"130430",area:"邱　县"},{areaId:"130431",area:"鸡泽县"},{areaId:"130432",area:"广平县"},{areaId:"130433",area:"馆陶县"},{areaId:"130434",area:"魏　县"},{areaId:"130435",area:"曲周县"},{areaId:"130481",area:"武安市"}]},{cityId:"130500",city:"邢台市",areas:[{areaId:"130501",area:"市辖区"},{areaId:"130502",area:"桥东区"},{areaId:"130503",area:"桥西区"},{areaId:"130521",area:"邢台县"},{areaId:"130522",area:"临城县"},{areaId:"130523",area:"内丘县"},{areaId:"130524",area:"柏乡县"},{areaId:"130525",area:"隆尧县"},{areaId:"130526",area:"任　县"},{areaId:"130527",area:"南和县"},{areaId:"130528",area:"宁晋县"},{areaId:"130529",area:"巨鹿县"},{areaId:"130530",area:"新河县"},{areaId:"130531",area:"广宗县"},{areaId:"130532",area:"平乡县"},{areaId:"130533",area:"威　县"},{areaId:"130534",area:"清河县"},{areaId:"130535",area:"临西县"},{areaId:"130581",area:"南宫市"},{areaId:"130582",area:"沙河市"}]},{cityId:"130600",city:"保定市",areas:[{areaId:"130601",area:"市辖区"},{areaId:"130602",area:"新市区"},{areaId:"130603",area:"北市区"},{areaId:"130604",area:"南市区"},{areaId:"130621",area:"满城县"},{areaId:"130622",area:"清苑县"},{areaId:"130623",area:"涞水县"},{areaId:"130624",area:"阜平县"},{areaId:"130625",area:"徐水县"},{areaId:"130626",area:"定兴县"},{areaId:"130627",area:"唐　县"},{areaId:"130628",area:"高阳县"},{areaId:"130629",area:"容城县"},{areaId:"130630",area:"涞源县"},{areaId:"130631",area:"望都县"},{areaId:"130632",area:"安新县"},{areaId:"130633",area:"易　县"},{areaId:"130634",area:"曲阳县"},{areaId:"130635",area:"蠡　县"},{areaId:"130636",area:"顺平县"},{areaId:"130637",area:"博野县"},{areaId:"130638",area:"雄　县"},{areaId:"130681",area:"涿州市"},{areaId:"130682",area:"定州市"},{areaId:"130683",area:"安国市"},{areaId:"130684",area:"高碑店市"}]},{cityId:"130700",city:"张家口市",areas:[{areaId:"130701",area:"市辖区"},{areaId:"130702",area:"桥东区"},{areaId:"130703",area:"桥西区"},{areaId:"130705",area:"宣化区"},{areaId:"130706",area:"下花园区"},{areaId:"130721",area:"宣化县"},{areaId:"130722",area:"张北县"},{areaId:"130723",area:"康保县"},{areaId:"130724",area:"沽源县"},{areaId:"130725",area:"尚义县"},{areaId:"130726",area:"蔚　县"},{areaId:"130727",area:"阳原县"},{areaId:"130728",area:"怀安县"},{areaId:"130729",area:"万全县"},{areaId:"130730",area:"怀来县"},{areaId:"130731",area:"涿鹿县"},{areaId:"130732",area:"赤城县"},{areaId:"130733",area:"崇礼县"}]},{cityId:"130800",city:"承德市",areas:[{areaId:"130801",area:"市辖区"},{areaId:"130802",area:"双桥区"},{areaId:"130803",area:"双滦区"},{areaId:"130804",area:"鹰手营子矿区"},{areaId:"130821",area:"承德县"},{areaId:"130822",area:"兴隆县"},{areaId:"130823",area:"平泉县"},{areaId:"130824",area:"滦平县"},{areaId:"130825",area:"隆化县"},{areaId:"130826",area:"丰宁满族自治县"},{areaId:"130827",area:"宽城满族自治县"},{areaId:"130828",area:"围场满族蒙古族自治县"}]},{cityId:"130900",city:"沧州市",areas:[{areaId:"130901",area:"市辖区"},{areaId:"130902",area:"新华区"},{areaId:"130903",area:"运河区"},{areaId:"130921",area:"沧　县"},{areaId:"130922",area:"青　县"},{areaId:"130923",area:"东光县"},{areaId:"130924",area:"海兴县"},{areaId:"130925",area:"盐山县"},{areaId:"130926",area:"肃宁县"},{areaId:"130927",area:"南皮县"},{areaId:"130928",area:"吴桥县"},{areaId:"130929",area:"献　县"},{areaId:"130930",area:"孟村回族自治县"},{areaId:"130981",area:"泊头市"},{areaId:"130982",area:"任丘市"},{areaId:"130983",area:"黄骅市"},{areaId:"130984",area:"河间市"}]},{cityId:"131000",city:"廊坊市",areas:[{areaId:"131001",area:"市辖区"},{areaId:"131002",area:"安次区"},{areaId:"131003",area:"广阳区"},{areaId:"131022",area:"固安县"},{areaId:"131023",area:"永清县"},{areaId:"131024",area:"香河县"},{areaId:"131025",area:"大城县"},{areaId:"131026",area:"文安县"},{areaId:"131028",area:"大厂回族自治县"},{areaId:"131081",area:"霸州市"},{areaId:"131082",area:"三河市"}]},{cityId:"131100",city:"衡水市",areas:[{areaId:"131101",area:"市辖区"},{areaId:"131102",area:"桃城区"},{areaId:"131121",area:"枣强县"},{areaId:"131122",area:"武邑县"},{areaId:"131123",area:"武强县"},{areaId:"131124",area:"饶阳县"},{areaId:"131125",area:"安平县"},{areaId:"131126",area:"故城县"},{areaId:"131127",area:"景　县"},{areaId:"131128",area:"阜城县"},{areaId:"131181",area:"冀州市"},{areaId:"131182",area:"深州市"}]}]},{provinceId:"140000",province:"山西省",citys:[{cityId:"140100",city:"太原市",areas:[{areaId:"140101",area:"市辖区"},{areaId:"140105",area:"小店区"},{areaId:"140106",area:"迎泽区"},{areaId:"140107",area:"杏花岭区"},{areaId:"140108",area:"尖草坪区"},{areaId:"140109",area:"万柏林区"},{areaId:"140110",area:"晋源区"},{areaId:"140121",area:"清徐县"},{areaId:"140122",area:"阳曲县"},{areaId:"140123",area:"娄烦县"},{areaId:"140181",area:"古交市"}]},{cityId:"140200",city:"大同市",areas:[{areaId:"140201",area:"市辖区"},{areaId:"140202",area:"城　区"},{areaId:"140203",area:"矿　区"},{areaId:"140211",area:"南郊区"},{areaId:"140212",area:"新荣区"},{areaId:"140221",area:"阳高县"},{areaId:"140222",area:"天镇县"},{areaId:"140223",area:"广灵县"},{areaId:"140224",area:"灵丘县"},{areaId:"140225",area:"浑源县"},{areaId:"140226",area:"左云县"},{areaId:"140227",area:"大同县"}]},{cityId:"140300",city:"阳泉市",areas:[{areaId:"140301",area:"市辖区"},{areaId:"140302",area:"城　区"},{areaId:"140303",area:"矿　区"},{areaId:"140311",area:"郊　区"},{areaId:"140321",area:"平定县"},{areaId:"140322",area:"盂　县"}]},{cityId:"140400",city:"长治市",areas:[{areaId:"140401",area:"市辖区"},{areaId:"140402",area:"城　区"},{areaId:"140411",area:"郊　区"},{areaId:"140421",area:"长治县"},{areaId:"140423",area:"襄垣县"},{areaId:"140424",area:"屯留县"},{areaId:"140425",area:"平顺县"},{areaId:"140426",area:"黎城县"},{areaId:"140427",area:"壶关县"},{areaId:"140428",area:"长子县"},{areaId:"140429",area:"武乡县"},{areaId:"140430",area:"沁　县"},{areaId:"140431",area:"沁源县"},{areaId:"140481",area:"潞城市"}]},{cityId:"140500",city:"晋城市",areas:[{areaId:"140501",area:"市辖区"},{areaId:"140502",area:"城　区"},{areaId:"140521",area:"沁水县"},{areaId:"140522",area:"阳城县"},{areaId:"140524",area:"陵川县"},{areaId:"140525",area:"泽州县"},{areaId:"140581",area:"高平市"}]},{cityId:"140600",city:"朔州市",areas:[{areaId:"140601",area:"市辖区"},{areaId:"140602",area:"朔城区"},{areaId:"140603",area:"平鲁区"},{areaId:"140621",area:"山阴县"},{areaId:"140622",area:"应　县"},{areaId:"140623",area:"右玉县"},{areaId:"140624",area:"怀仁县"}]},{cityId:"140700",city:"晋中市",areas:[{areaId:"140701",area:"市辖区"},{areaId:"140702",area:"榆次区"},{areaId:"140721",area:"榆社县"},{areaId:"140722",area:"左权县"},{areaId:"140723",area:"和顺县"},{areaId:"140724",area:"昔阳县"},{areaId:"140725",area:"寿阳县"},{areaId:"140726",area:"太谷县"},{areaId:"140727",area:"祁　县"},{areaId:"140728",area:"平遥县"},{areaId:"140729",area:"灵石县"},{areaId:"140781",area:"介休市"}]},{cityId:"140800",city:"运城市",areas:[{areaId:"140801",area:"市辖区"},{areaId:"140802",area:"盐湖区"},{areaId:"140821",area:"临猗县"},{areaId:"140822",area:"万荣县"},{areaId:"140823",area:"闻喜县"},{areaId:"140824",area:"稷山县"},{areaId:"140825",area:"新绛县"},{areaId:"140826",area:"绛　县"},{areaId:"140827",area:"垣曲县"},{areaId:"140828",area:"夏　县"},{areaId:"140829",area:"平陆县"},{areaId:"140830",area:"芮城县"},{areaId:"140881",area:"永济市"},{areaId:"140882",area:"河津市"}]},{cityId:"140900",city:"忻州市",areas:[{areaId:"140901",area:"市辖区"},{areaId:"140902",area:"忻府区"},{areaId:"140921",area:"定襄县"},{areaId:"140922",area:"五台县"},{areaId:"140923",area:"代　县"},{areaId:"140924",area:"繁峙县"},{areaId:"140925",area:"宁武县"},{areaId:"140926",area:"静乐县"},{areaId:"140927",area:"神池县"},{areaId:"140928",area:"五寨县"},{areaId:"140929",area:"岢岚县"},{areaId:"140930",area:"河曲县"},{areaId:"140931",area:"保德县"},{areaId:"140932",area:"偏关县"},{areaId:"140981",area:"原平市"}]},{cityId:"141000",city:"临汾市",areas:[{areaId:"141001",area:"市辖区"},{areaId:"141002",area:"尧都区"},{areaId:"141021",area:"曲沃县"},{areaId:"141022",area:"翼城县"},{areaId:"141023",area:"襄汾县"},{areaId:"141024",area:"洪洞县"},{areaId:"141025",area:"古　县"},{areaId:"141026",area:"安泽县"},{areaId:"141027",area:"浮山县"},{areaId:"141028",area:"吉　县"},{areaId:"141029",area:"乡宁县"},{areaId:"141030",area:"大宁县"},{areaId:"141031",area:"隰　县"},{areaId:"141032",area:"永和县"},{areaId:"141033",area:"蒲　县"},{areaId:"141034",area:"汾西县"},{areaId:"141081",area:"侯马市"},{areaId:"141082",area:"霍州市"}]},{cityId:"141100",city:"吕梁市",areas:[{areaId:"141101",area:"市辖区"},{areaId:"141102",area:"离石区"},{areaId:"141121",area:"文水县"},{areaId:"141122",area:"交城县"},{areaId:"141123",area:"兴　县"},{areaId:"141124",area:"临　县"},{areaId:"141125",area:"柳林县"},{areaId:"141126",area:"石楼县"},{areaId:"141127",area:"岚　县"},{areaId:"141128",area:"方山县"},{areaId:"141129",area:"中阳县"},{areaId:"141130",area:"交口县"},{areaId:"141181",area:"孝义市"},{areaId:"141182",area:"汾阳市"}]}]},{provinceId:"150000",province:"内蒙古自治区",citys:[{cityId:"150100",city:"呼和浩特市",areas:[{areaId:"150101",area:"市辖区"},{areaId:"150102",area:"新城区"},{areaId:"150103",area:"回民区"},{areaId:"150104",area:"玉泉区"},{areaId:"150105",area:"赛罕区"},{areaId:"150121",area:"土默特左旗"},{areaId:"150122",area:"托克托县"},{areaId:"150123",area:"和林格尔县"},{areaId:"150124",area:"清水河县"},{areaId:"150125",area:"武川县"}]},{cityId:"150200",city:"包头市",areas:[{areaId:"150201",area:"市辖区"},{areaId:"150202",area:"东河区"},{areaId:"150203",area:"昆都仑区"},{areaId:"150204",area:"青山区"},{areaId:"150205",area:"石拐区"},{areaId:"150206",area:"白云矿区"},{areaId:"150207",area:"九原区"},{areaId:"150221",area:"土默特右旗"},{areaId:"150222",area:"固阳县"},{areaId:"150223",area:"达尔罕茂明安联合旗"}]},{cityId:"150300",city:"乌海市",areas:[{areaId:"150301",area:"市辖区"},{areaId:"150302",area:"海勃湾区"},{areaId:"150303",area:"海南区"},{areaId:"150304",area:"乌达区"}]},{cityId:"150400",city:"赤峰市",areas:[{areaId:"150401",area:"市辖区"},{areaId:"150402",area:"红山区"},{areaId:"150403",area:"元宝山区"},{areaId:"150404",area:"松山区"},{areaId:"150421",area:"阿鲁科尔沁旗"},{areaId:"150422",area:"巴林左旗"},{areaId:"150423",area:"巴林右旗"},{areaId:"150424",area:"林西县"},{areaId:"150425",area:"克什克腾旗"},{areaId:"150426",area:"翁牛特旗"},{areaId:"150428",area:"喀喇沁旗"},{areaId:"150429",area:"宁城县"},{areaId:"150430",area:"敖汉旗"}]},{cityId:"150500",city:"通辽市",areas:[{areaId:"150501",area:"市辖区"},{areaId:"150502",area:"科尔沁区"},{areaId:"150521",area:"科尔沁左翼中旗"},{areaId:"150522",area:"科尔沁左翼后旗"},{areaId:"150523",area:"开鲁县"},{areaId:"150524",area:"库伦旗"},{areaId:"150525",area:"奈曼旗"},{areaId:"150526",area:"扎鲁特旗"},{areaId:"150581",area:"霍林郭勒市"}]},{cityId:"150600",city:"鄂尔多斯市",areas:[{areaId:"150602",area:"东胜区"},{areaId:"150621",area:"达拉特旗"},{areaId:"150622",area:"准格尔旗"},{areaId:"150623",area:"鄂托克前旗"},{areaId:"150624",area:"鄂托克旗"},{areaId:"150625",area:"杭锦旗"},{areaId:"150626",area:"乌审旗"},{areaId:"150627",area:"伊金霍洛旗"}]},{cityId:"150700",city:"呼伦贝尔市",areas:[{areaId:"150701",area:"市辖区"},{areaId:"150702",area:"海拉尔区"},{areaId:"150721",area:"阿荣旗"},{areaId:"150722",area:"莫力达瓦达斡尔族自治旗"},{areaId:"150723",area:"鄂伦春自治旗"},{areaId:"150724",area:"鄂温克族自治旗"},{areaId:"150725",area:"陈巴尔虎旗"},{areaId:"150726",area:"新巴尔虎左旗"},{areaId:"150727",area:"新巴尔虎右旗"},{areaId:"150781",area:"满洲里市"},{areaId:"150782",area:"牙克石市"},{areaId:"150783",area:"扎兰屯市"},{areaId:"150784",area:"额尔古纳市"},{areaId:"150785",area:"根河市"}]},{cityId:"150800",city:"巴彦淖尔市",areas:[{areaId:"150801",area:"市辖区"},{areaId:"150802",area:"临河区"},{areaId:"150821",area:"五原县"},{areaId:"150822",area:"磴口县"},{areaId:"150823",area:"乌拉特前旗"},{areaId:"150824",area:"乌拉特中旗"},{areaId:"150825",area:"乌拉特后旗"},{areaId:"150826",area:"杭锦后旗"}]},{cityId:"150900",city:"乌兰察布市",areas:[{areaId:"150901",area:"市辖区"},{areaId:"150902",area:"集宁区"},{areaId:"150921",area:"卓资县"},{areaId:"150922",area:"化德县"},{areaId:"150923",area:"商都县"},{areaId:"150924",area:"兴和县"},{areaId:"150925",area:"凉城县"},{areaId:"150926",area:"察哈尔右翼前旗"},{areaId:"150927",area:"察哈尔右翼中旗"},{areaId:"150928",area:"察哈尔右翼后旗"},{areaId:"150929",area:"四子王旗"},{areaId:"150981",area:"丰镇市"}]},{cityId:"152200",city:"兴安盟",areas:[{areaId:"152201",area:"乌兰浩特市"},{areaId:"152202",area:"阿尔山市"},{areaId:"152221",area:"科尔沁右翼前旗"},{areaId:"152222",area:"科尔沁右翼中旗"},{areaId:"152223",area:"扎赉特旗"},{areaId:"152224",area:"突泉县"}]},{cityId:"152500",city:"锡林郭勒盟",areas:[{areaId:"152501",area:"二连浩特市"},{areaId:"152502",area:"锡林浩特市"},{areaId:"152522",area:"阿巴嘎旗"},{areaId:"152523",area:"苏尼特左旗"},{areaId:"152524",area:"苏尼特右旗"},{areaId:"152525",area:"东乌珠穆沁旗"},{areaId:"152526",area:"西乌珠穆沁旗"},{areaId:"152527",area:"太仆寺旗"},{areaId:"152528",area:"镶黄旗"},{areaId:"152529",area:"正镶白旗"},{areaId:"152530",area:"正蓝旗"},{areaId:"152531",area:"多伦县"}]},{cityId:"152900",city:"阿拉善盟",areas:[{areaId:"152921",area:"阿拉善左旗"},{areaId:"152922",area:"阿拉善右旗"},{areaId:"152923",area:"额济纳旗"}]}]},{provinceId:"210000",province:"辽宁省",citys:[{cityId:"210100",city:"沈阳市",areas:[{areaId:"210101",area:"市辖区"},{areaId:"210102",area:"和平区"},{areaId:"210103",area:"沈河区"},{areaId:"210104",area:"大东区"},{areaId:"210105",area:"皇姑区"},{areaId:"210106",area:"铁西区"},{areaId:"210111",area:"苏家屯区"},{areaId:"210112",area:"东陵区"},{areaId:"210113",area:"新城子区"},{areaId:"210114",area:"于洪区"},{areaId:"210122",area:"辽中县"},{areaId:"210123",area:"康平县"},{areaId:"210124",area:"法库县"},{areaId:"210181",area:"新民市"}]},{cityId:"210200",city:"大连市",areas:[{areaId:"210201",area:"市辖区"},{areaId:"210202",area:"中山区"},{areaId:"210203",area:"西岗区"},{areaId:"210204",area:"沙河口区"},{areaId:"210211",area:"甘井子区"},{areaId:"210212",area:"旅顺口区"},{areaId:"210213",area:"金州区"},{areaId:"210224",area:"长海县"},{areaId:"210281",area:"瓦房店市"},{areaId:"210282",area:"普兰店市"},{areaId:"210283",area:"庄河市"}]},{cityId:"210300",city:"鞍山市",areas:[{areaId:"210301",area:"市辖区"},{areaId:"210302",area:"铁东区"},{areaId:"210303",area:"铁西区"},{areaId:"210304",area:"立山区"},{areaId:"210311",area:"千山区"},{areaId:"210321",area:"台安县"},{areaId:"210323",area:"岫岩满族自治县"},{areaId:"210381",area:"海城市"}]},{cityId:"210400",city:"抚顺市",areas:[{areaId:"210401",area:"市辖区"},{areaId:"210402",area:"新抚区"},{areaId:"210403",area:"东洲区"},{areaId:"210404",area:"望花区"},{areaId:"210411",area:"顺城区"},{areaId:"210421",area:"抚顺县"},{areaId:"210422",area:"新宾满族自治县"},{areaId:"210423",area:"清原满族自治县"}]},{cityId:"210500",city:"本溪市",areas:[{areaId:"210501",area:"市辖区"},{areaId:"210502",area:"平山区"},{areaId:"210503",area:"溪湖区"},{areaId:"210504",area:"明山区"},{areaId:"210505",area:"南芬区"},{areaId:"210521",area:"本溪满族自治县"},{areaId:"210522",area:"桓仁满族自治县"}]},{cityId:"210600",city:"丹东市",areas:[{areaId:"210601",area:"市辖区"},{areaId:"210602",area:"元宝区"},{areaId:"210603",area:"振兴区"},{areaId:"210604",area:"振安区"},{areaId:"210624",area:"宽甸满族自治县"},{areaId:"210681",area:"东港市"},{areaId:"210682",area:"凤城市"}]},{cityId:"210700",city:"锦州市",areas:[{areaId:"210701",area:"市辖区"},{areaId:"210702",area:"古塔区"},{areaId:"210703",area:"凌河区"},{areaId:"210711",area:"太和区"},{areaId:"210726",area:"黑山县"},{areaId:"210727",area:"义　县"},{areaId:"210781",area:"凌海市"},{areaId:"210782",area:"北宁市"}]},{cityId:"210800",city:"营口市",areas:[{areaId:"210801",area:"市辖区"},{areaId:"210802",area:"站前区"},{areaId:"210803",area:"西市区"},{areaId:"210804",area:"鲅鱼圈区"},{areaId:"210811",area:"老边区"},{areaId:"210881",area:"盖州市"},{areaId:"210882",area:"大石桥市"}]},{cityId:"210900",city:"阜新市",areas:[{areaId:"210901",area:"市辖区"},{areaId:"210902",area:"海州区"},{areaId:"210903",area:"新邱区"},{areaId:"210904",area:"太平区"},{areaId:"210905",area:"清河门区"},{areaId:"210911",area:"细河区"},{areaId:"210921",area:"阜新蒙古族自治县"},{areaId:"210922",area:"彰武县"}]},{cityId:"211000",city:"辽阳市",areas:[{areaId:"211001",area:"市辖区"},{areaId:"211002",area:"白塔区"},{areaId:"211003",area:"文圣区"},{areaId:"211004",area:"宏伟区"},{areaId:"211005",area:"弓长岭区"},{areaId:"211011",area:"太子河区"},{areaId:"211021",area:"辽阳县"},{areaId:"211081",area:"灯塔市"}]},{cityId:"211100",city:"盘锦市",areas:[{areaId:"211101",area:"市辖区"},{areaId:"211102",area:"双台子区"},{areaId:"211103",area:"兴隆台区"},{areaId:"211121",area:"大洼县"},{areaId:"211122",area:"盘山县"}]},{cityId:"211200",city:"铁岭市",areas:[{areaId:"211201",area:"市辖区"},{areaId:"211202",area:"银州区"},{areaId:"211204",area:"清河区"},{areaId:"211221",area:"铁岭县"},{areaId:"211223",area:"西丰县"},{areaId:"211224",area:"昌图县"},{areaId:"211281",area:"调兵山市"},{areaId:"211282",area:"开原市"}]},{cityId:"211300",city:"朝阳市",areas:[{areaId:"211301",area:"市辖区"},{areaId:"211302",area:"双塔区"},{areaId:"211303",area:"龙城区"},{areaId:"211321",area:"朝阳县"},{areaId:"211322",area:"建平县"},{areaId:"211324",area:"喀喇沁左翼蒙古族自治县"},{areaId:"211381",area:"北票市"},{areaId:"211382",area:"凌源市"}]},{cityId:"211400",city:"葫芦岛市",areas:[{areaId:"211401",area:"市辖区"},{areaId:"211402",area:"连山区"},{areaId:"211403",area:"龙港区"},{areaId:"211404",area:"南票区"},{areaId:"211421",area:"绥中县"},{areaId:"211422",area:"建昌县"},{areaId:"211481",area:"兴城市"}]}]},{provinceId:"220000",province:"吉林省",citys:[{cityId:"220100",city:"长春市",areas:[{areaId:"220101",area:"市辖区"},{areaId:"220102",area:"南关区"},{areaId:"220103",area:"宽城区"},{areaId:"220104",area:"朝阳区"},{areaId:"220105",area:"二道区"},{areaId:"220106",area:"绿园区"},{areaId:"220112",area:"双阳区"},{areaId:"220122",area:"农安县"},{areaId:"220181",area:"九台市"},{areaId:"220182",area:"榆树市"},{areaId:"220183",area:"德惠市"}]},{cityId:"220200",city:"吉林市",areas:[{areaId:"220201",area:"市辖区"},{areaId:"220202",area:"昌邑区"},{areaId:"220203",area:"龙潭区"},{areaId:"220204",area:"船营区"},{areaId:"220211",area:"丰满区"},{areaId:"220221",area:"永吉县"},{areaId:"220281",area:"蛟河市"},{areaId:"220282",area:"桦甸市"},{areaId:"220283",area:"舒兰市"},{areaId:"220284",area:"磐石市"}]},{cityId:"220300",city:"四平市",areas:[{areaId:"220301",area:"市辖区"},{areaId:"220302",area:"铁西区"},{areaId:"220303",area:"铁东区"},{areaId:"220322",area:"梨树县"},{areaId:"220323",area:"伊通满族自治县"},{areaId:"220381",area:"公主岭市"},{areaId:"220382",area:"双辽市"}]},{cityId:"220400",city:"辽源市",areas:[{areaId:"220401",area:"市辖区"},{areaId:"220402",area:"龙山区"},{areaId:"220403",area:"西安区"},{areaId:"220421",area:"东丰县"},{areaId:"220422",area:"东辽县"}]},{cityId:"220500",city:"通化市",areas:[{areaId:"220501",area:"市辖区"},{areaId:"220502",area:"东昌区"},{areaId:"220503",area:"二道江区"},{areaId:"220521",area:"通化县"},{areaId:"220523",area:"辉南县"},{areaId:"220524",area:"柳河县"},{areaId:"220581",area:"梅河口市"},{areaId:"220582",area:"集安市"}]},{cityId:"220600",city:"白山市",areas:[{areaId:"220601",area:"市辖区"},{areaId:"220602",area:"八道江区"},{areaId:"220621",area:"抚松县"},{areaId:"220622",area:"靖宇县"},{areaId:"220623",area:"长白朝鲜族自治县"},{areaId:"220625",area:"江源县"},{areaId:"220681",area:"临江市"}]},{cityId:"220700",city:"松原市",areas:[{areaId:"220701",area:"市辖区"},{areaId:"220702",area:"宁江区"},{areaId:"220721",area:"前郭尔罗斯蒙古族自治县"},{areaId:"220722",area:"长岭县"},{areaId:"220723",area:"乾安县"},{areaId:"220724",area:"扶余县"}]},{cityId:"220800",city:"白城市",areas:[{areaId:"220801",area:"市辖区"},{areaId:"220802",area:"洮北区"},{areaId:"220821",area:"镇赉县"},{areaId:"220822",area:"通榆县"},{areaId:"220881",area:"洮南市"},{areaId:"220882",area:"大安市"}]},{cityId:"222400",city:"延边朝鲜族自治州",areas:[{areaId:"222401",area:"延吉市"},{areaId:"222402",area:"图们市"},{areaId:"222403",area:"敦化市"},{areaId:"222404",area:"珲春市"},{areaId:"222405",area:"龙井市"},{areaId:"222406",area:"和龙市"},{areaId:"222424",area:"汪清县"},{areaId:"222426",area:"安图县"}]}]},{provinceId:"230000",province:"黑龙江省",citys:[{cityId:"230100",city:"哈尔滨市",areas:[{areaId:"230101",area:"市辖区"},{areaId:"230102",area:"道里区"},{areaId:"230103",area:"南岗区"},{areaId:"230104",area:"道外区"},{areaId:"230106",area:"香坊区"},{areaId:"230107",area:"动力区"},{areaId:"230108",area:"平房区"},{areaId:"230109",area:"松北区"},{areaId:"230111",area:"呼兰区"},{areaId:"230123",area:"依兰县"},{areaId:"230124",area:"方正县"},{areaId:"230125",area:"宾　县"},{areaId:"230126",area:"巴彦县"},{areaId:"230127",area:"木兰县"},{areaId:"230128",area:"通河县"},{areaId:"230129",area:"延寿县"},{areaId:"230181",area:"阿城市"},{areaId:"230182",area:"双城市"},{areaId:"230183",area:"尚志市"},{areaId:"230184",area:"五常市"}]},{cityId:"230200",city:"齐齐哈尔市",areas:[{areaId:"230201",area:"市辖区"},{areaId:"230202",area:"龙沙区"},{areaId:"230203",area:"建华区"},{areaId:"230204",area:"铁锋区"},{areaId:"230205",area:"昂昂溪区"},{areaId:"230206",area:"富拉尔基区"},{areaId:"230207",area:"碾子山区"},{areaId:"230208",area:"梅里斯达斡尔族区"},{areaId:"230221",area:"龙江县"},{areaId:"230223",area:"依安县"},{areaId:"230224",area:"泰来县"},{areaId:"230225",area:"甘南县"},{areaId:"230227",area:"富裕县"},{areaId:"230229",area:"克山县"},{areaId:"230230",area:"克东县"},{areaId:"230231",area:"拜泉县"},{areaId:"230281",area:"讷河市"}]},{cityId:"230300",city:"鸡西市",areas:[{areaId:"230301",area:"市辖区"},{areaId:"230302",area:"鸡冠区"},{areaId:"230303",area:"恒山区"},{areaId:"230304",area:"滴道区"},{areaId:"230305",area:"梨树区"},{areaId:"230306",area:"城子河区"},{areaId:"230307",area:"麻山区"},{areaId:"230321",area:"鸡东县"},{areaId:"230381",area:"虎林市"},{areaId:"230382",area:"密山市"}]},{cityId:"230400",city:"鹤岗市",areas:[{areaId:"230401",area:"市辖区"},{areaId:"230402",area:"向阳区"},{areaId:"230403",area:"工农区"},{areaId:"230404",area:"南山区"},{areaId:"230405",area:"兴安区"},{areaId:"230406",area:"东山区"},{areaId:"230407",area:"兴山区"},{areaId:"230421",area:"萝北县"},{areaId:"230422",area:"绥滨县"}]},{cityId:"230500",city:"双鸭山市",areas:[{areaId:"230501",area:"市辖区"},{areaId:"230502",area:"尖山区"},{areaId:"230503",area:"岭东区"},{areaId:"230505",area:"四方台区"},{areaId:"230506",area:"宝山区"},{areaId:"230521",area:"集贤县"},{areaId:"230522",area:"友谊县"},{areaId:"230523",area:"宝清县"},{areaId:"230524",area:"饶河县"}]},{cityId:"230600",city:"大庆市",areas:[{areaId:"230601",area:"市辖区"},{areaId:"230602",area:"萨尔图区"},{areaId:"230603",area:"龙凤区"},{areaId:"230604",area:"让胡路区"},{areaId:"230605",area:"红岗区"},{areaId:"230606",area:"大同区"},{areaId:"230621",area:"肇州县"},{areaId:"230622",area:"肇源县"},{areaId:"230623",area:"林甸县"},{areaId:"230624",area:"杜尔伯特蒙古族自治县"}]},{cityId:"230700",city:"伊春市",areas:[{areaId:"230701",area:"市辖区"},{areaId:"230702",area:"伊春区"},{areaId:"230703",area:"南岔区"},{areaId:"230704",area:"友好区"},{areaId:"230705",area:"西林区"},{areaId:"230706",area:"翠峦区"},{areaId:"230707",area:"新青区"},{areaId:"230708",area:"美溪区"},{areaId:"230709",area:"金山屯区"},{areaId:"230710",area:"五营区"},{areaId:"230711",area:"乌马河区"},{areaId:"230712",area:"汤旺河区"},{areaId:"230713",area:"带岭区"},{areaId:"230714",area:"乌伊岭区"},{areaId:"230715",area:"红星区"},{areaId:"230716",area:"上甘岭区"},{areaId:"230722",area:"嘉荫县"},{areaId:"230781",area:"铁力市"}]},{cityId:"230800",city:"佳木斯市",areas:[{areaId:"230801",area:"市辖区"},{areaId:"230802",area:"永红区"},{areaId:"230803",area:"向阳区"},{areaId:"230804",area:"前进区"},{areaId:"230805",area:"东风区"},{areaId:"230811",area:"郊　区"},{areaId:"230822",area:"桦南县"},{areaId:"230826",area:"桦川县"},{areaId:"230828",area:"汤原县"},{areaId:"230833",area:"抚远县"},{areaId:"230881",area:"同江市"},{areaId:"230882",area:"富锦市"}]},{cityId:"230900",city:"七台河市",areas:[{areaId:"230901",area:"市辖区"},{areaId:"230902",area:"新兴区"},{areaId:"230903",area:"桃山区"},{areaId:"230904",area:"茄子河区"},{areaId:"230921",area:"勃利县"}]},{cityId:"231000",city:"牡丹江市",areas:[{areaId:"231001",area:"市辖区"},{areaId:"231002",area:"东安区"},{areaId:"231003",area:"阳明区"},{areaId:"231004",area:"爱民区"},{areaId:"231005",area:"西安区"},{areaId:"231024",area:"东宁县"},{areaId:"231025",area:"林口县"},{areaId:"231081",area:"绥芬河市"},{areaId:"231083",area:"海林市"},{areaId:"231084",area:"宁安市"},{areaId:"231085",area:"穆棱市"}]},{cityId:"231100",city:"黑河市",areas:[{areaId:"231101",area:"市辖区"},{areaId:"231102",area:"爱辉区"},{areaId:"231121",area:"嫩江县"},{areaId:"231123",area:"逊克县"},{areaId:"231124",area:"孙吴县"},{areaId:"231181",area:"北安市"},{areaId:"231182",area:"五大连池市"}]},{cityId:"231200",city:"绥化市",areas:[{areaId:"231201",area:"市辖区"},{areaId:"231202",area:"北林区"},{areaId:"231221",area:"望奎县"},{areaId:"231222",area:"兰西县"},{areaId:"231223",area:"青冈县"},{areaId:"231224",area:"庆安县"},{areaId:"231225",area:"明水县"},{areaId:"231226",area:"绥棱县"},{areaId:"231281",area:"安达市"},{areaId:"231282",area:"肇东市"},{areaId:"231283",area:"海伦市"}]},{cityId:"232700",city:"大兴安岭地区",areas:[{areaId:"232721",area:"呼玛县"},{areaId:"232722",area:"塔河县"},{areaId:"232723",area:"漠河县"}]}]},{provinceId:"310000",province:"上海市",citys:[{cityId:"310100",city:"市辖区",areas:[{areaId:"310101",area:"黄浦区"},{areaId:"310103",area:"卢湾区"},{areaId:"310104",area:"徐汇区"},{areaId:"310105",area:"长宁区"},{areaId:"310106",area:"静安区"},{areaId:"310107",area:"普陀区"},{areaId:"310108",area:"闸北区"},{areaId:"310109",area:"虹口区"},{areaId:"310110",area:"杨浦区"},{areaId:"310112",area:"闵行区"},{areaId:"310113",area:"宝山区"},{areaId:"310114",area:"嘉定区"},{areaId:"310115",area:"浦东新区"},{areaId:"310116",area:"金山区"},{areaId:"310117",area:"松江区"},{areaId:"310118",area:"青浦区"},{areaId:"310119",area:"南汇区"},{areaId:"310120",area:"奉贤区"}]},{cityId:"310200",city:"县",areas:[{areaId:"310230",area:"崇明县"}]}]},{provinceId:"320000",province:"江苏省",citys:[{cityId:"320100",city:"南京市",areas:[{areaId:"320101",area:"市辖区"},{areaId:"320102",area:"玄武区"},{areaId:"320103",area:"白下区"},{areaId:"320104",area:"秦淮区"},{areaId:"320105",area:"建邺区"},{areaId:"320106",area:"鼓楼区"},{areaId:"320107",area:"下关区"},{areaId:"320111",area:"浦口区"},{areaId:"320113",area:"栖霞区"},{areaId:"320114",area:"雨花台区"},{areaId:"320115",area:"江宁区"},{areaId:"320116",area:"六合区"},{areaId:"320124",area:"溧水县"},{areaId:"320125",area:"高淳县"}]},{cityId:"320200",city:"无锡市",areas:[{areaId:"320201",area:"市辖区"},{areaId:"320202",area:"崇安区"},{areaId:"320203",area:"南长区"},{areaId:"320204",area:"北塘区"},{areaId:"320205",area:"锡山区"},{areaId:"320206",area:"惠山区"},{areaId:"320211",area:"滨湖区"},{areaId:"320281",area:"江阴市"},{areaId:"320282",area:"宜兴市"}]},{cityId:"320300",city:"徐州市",areas:[{areaId:"320301",area:"市辖区"},{areaId:"320302",area:"鼓楼区"},{areaId:"320303",area:"云龙区"},{areaId:"320304",area:"九里区"},{areaId:"320305",area:"贾汪区"},{areaId:"320311",area:"泉山区"},{areaId:"320321",area:"丰　县"},{areaId:"320322",area:"沛　县"},{areaId:"320323",area:"铜山县"},{areaId:"320324",area:"睢宁县"},{areaId:"320381",area:"新沂市"},{areaId:"320382",area:"邳州市"}]},{cityId:"320400",city:"常州市",areas:[{areaId:"320401",area:"市辖区"},{areaId:"320402",area:"天宁区"},{areaId:"320404",area:"钟楼区"},{areaId:"320405",area:"戚墅堰区"},{areaId:"320411",area:"新北区"},{areaId:"320412",area:"武进区"},{areaId:"320481",area:"溧阳市"},{areaId:"320482",area:"金坛市"}]},{cityId:"320500",city:"苏州市",areas:[{areaId:"320501",area:"市辖区"},{areaId:"320502",area:"沧浪区"},{areaId:"320503",area:"平江区"},{areaId:"320504",area:"金阊区"},{areaId:"320505",area:"虎丘区"},{areaId:"320506",area:"吴中区"},{areaId:"320507",area:"相城区"},{areaId:"320581",area:"常熟市"},{areaId:"320582",area:"张家港市"},{areaId:"320583",area:"昆山市"},{areaId:"320584",area:"吴江市"},{areaId:"320585",area:"太仓市"}]},{cityId:"320600",city:"南通市",areas:[{areaId:"320601",area:"市辖区"},{areaId:"320602",area:"崇川区"},{areaId:"320611",area:"港闸区"},{areaId:"320621",area:"海安县"},{areaId:"320623",area:"如东县"},{areaId:"320681",area:"启东市"},{areaId:"320682",area:"如皋市"},{areaId:"320683",area:"通州市"},{areaId:"320684",area:"海门市"}]},{cityId:"320700",city:"连云港市",areas:[{areaId:"320701",area:"市辖区"},{areaId:"320703",area:"连云区"},{areaId:"320705",area:"新浦区"},{areaId:"320706",area:"海州区"},{areaId:"320721",area:"赣榆县"},{areaId:"320722",area:"东海县"},{areaId:"320723",area:"灌云县"},{areaId:"320724",area:"灌南县"}]},{cityId:"320800",city:"淮安市",areas:[{areaId:"320801",area:"市辖区"},{areaId:"320802",area:"清河区"},{areaId:"320803",area:"楚州区"},{areaId:"320804",area:"淮阴区"},{areaId:"320811",area:"清浦区"},{areaId:"320826",area:"涟水县"},{areaId:"320829",area:"洪泽县"},{areaId:"320830",area:"盱眙县"},{areaId:"320831",area:"金湖县"}]},{cityId:"320900",city:"盐城市",areas:[{areaId:"320901",area:"市辖区"},{areaId:"320902",area:"亭湖区"},{areaId:"320903",area:"盐都区"},{areaId:"320921",area:"响水县"},{areaId:"320922",area:"滨海县"},{areaId:"320923",area:"阜宁县"},{areaId:"320924",area:"射阳县"},{areaId:"320925",area:"建湖县"},{areaId:"320981",area:"东台市"},{areaId:"320982",area:"大丰市"}]},{cityId:"321000",city:"扬州市",areas:[{areaId:"321001",area:"市辖区"},{areaId:"321002",area:"广陵区"},{areaId:"321003",area:"邗江区"},{areaId:"321011",area:"郊　区"},{areaId:"321023",area:"宝应县"},{areaId:"321081",area:"仪征市"},{areaId:"321084",area:"高邮市"},{areaId:"321088",area:"江都市"}]},{cityId:"321100",city:"镇江市",areas:[{areaId:"321101",area:"市辖区"},{areaId:"321102",area:"京口区"},{areaId:"321111",area:"润州区"},{areaId:"321112",area:"丹徒区"},{areaId:"321181",area:"丹阳市"},{areaId:"321182",area:"扬中市"},{areaId:"321183",area:"句容市"}]},{cityId:"321200",city:"泰州市",areas:[{areaId:"321201",area:"市辖区"},{areaId:"321202",area:"海陵区"},{areaId:"321203",area:"高港区"},{areaId:"321281",area:"兴化市"},{areaId:"321282",area:"靖江市"},{areaId:"321283",area:"泰兴市"},{areaId:"321284",area:"姜堰市"}]},{cityId:"321300",city:"宿迁市",areas:[{areaId:"321301",area:"市辖区"},{areaId:"321302",area:"宿城区"},{areaId:"321311",area:"宿豫区"},{areaId:"321322",area:"沭阳县"},{areaId:"321323",area:"泗阳县"},{areaId:"321324",area:"泗洪县"}]}]},{provinceId:"330000",province:"浙江省",citys:[{cityId:"330100",city:"杭州市",areas:[{areaId:"330101",area:"市辖区"},{areaId:"330102",area:"上城区"},{areaId:"330103",area:"下城区"},{areaId:"330104",area:"江干区"},{areaId:"330105",area:"拱墅区"},{areaId:"330106",area:"西湖区"},{areaId:"330108",area:"滨江区"},{areaId:"330109",area:"萧山区"},{areaId:"330110",area:"余杭区"},{areaId:"330122",area:"桐庐县"},{areaId:"330127",area:"淳安县"},{areaId:"330182",area:"建德市"},{areaId:"330183",area:"富阳市"},{areaId:"330185",area:"临安市"}]},{cityId:"330200",city:"宁波市",areas:[{areaId:"330201",area:"市辖区"},{areaId:"330203",area:"海曙区"},{areaId:"330204",area:"江东区"},{areaId:"330205",area:"江北区"},{areaId:"330206",area:"北仑区"},{areaId:"330211",area:"镇海区"},{areaId:"330212",area:"鄞州区"},{areaId:"330225",area:"象山县"},{areaId:"330226",area:"宁海县"},{areaId:"330281",area:"余姚市"},{areaId:"330282",area:"慈溪市"},{areaId:"330283",area:"奉化市"}]},{cityId:"330300",city:"温州市",areas:[{areaId:"330301",area:"市辖区"},{areaId:"330302",area:"鹿城区"},{areaId:"330303",area:"龙湾区"},{areaId:"330304",area:"瓯海区"},{areaId:"330322",area:"洞头县"},{areaId:"330324",area:"永嘉县"},{areaId:"330326",area:"平阳县"},{areaId:"330327",area:"苍南县"},{areaId:"330328",area:"文成县"},{areaId:"330329",area:"泰顺县"},{areaId:"330381",area:"瑞安市"},{areaId:"330382",area:"乐清市"}]},{cityId:"330400",city:"嘉兴市",areas:[{areaId:"330401",area:"市辖区"},{areaId:"330402",area:"秀城区"},{areaId:"330411",area:"秀洲区"},{areaId:"330421",area:"嘉善县"},{areaId:"330424",area:"海盐县"},{areaId:"330481",area:"海宁市"},{areaId:"330482",area:"平湖市"},{areaId:"330483",area:"桐乡市"}]},{cityId:"330500",city:"湖州市",areas:[{areaId:"330501",area:"市辖区"},{areaId:"330502",area:"吴兴区"},{areaId:"330503",area:"南浔区"},{areaId:"330521",area:"德清县"},{areaId:"330522",area:"长兴县"},{areaId:"330523",area:"安吉县"}]},{cityId:"330600",city:"绍兴市",areas:[{areaId:"330601",area:"市辖区"},{areaId:"330602",area:"越城区"},{areaId:"330621",area:"绍兴县"},{areaId:"330624",area:"新昌县"},{areaId:"330681",area:"诸暨市"},{areaId:"330682",area:"上虞市"},{areaId:"330683",area:"嵊州市"}]},{cityId:"330700",city:"金华市",areas:[{areaId:"330701",area:"市辖区"},{areaId:"330702",area:"婺城区"},{areaId:"330703",area:"金东区"},{areaId:"330723",area:"武义县"},{areaId:"330726",area:"浦江县"},{areaId:"330727",area:"磐安县"},{areaId:"330781",area:"兰溪市"},{areaId:"330782",area:"义乌市"},{areaId:"330783",area:"东阳市"},{areaId:"330784",area:"永康市"}]},{cityId:"330800",city:"衢州市",areas:[{areaId:"330801",area:"市辖区"},{areaId:"330802",area:"柯城区"},{areaId:"330803",area:"衢江区"},{areaId:"330822",area:"常山县"},{areaId:"330824",area:"开化县"},{areaId:"330825",area:"龙游县"},{areaId:"330881",area:"江山市"}]},{cityId:"330900",city:"舟山市",areas:[{areaId:"330901",area:"市辖区"},{areaId:"330902",area:"定海区"},{areaId:"330903",area:"普陀区"},{areaId:"330921",area:"岱山县"},{areaId:"330922",area:"嵊泗县"}]},{cityId:"331000",city:"台州市",areas:[{areaId:"331001",area:"市辖区"},{areaId:"331002",area:"椒江区"},{areaId:"331003",area:"黄岩区"},{areaId:"331004",area:"路桥区"},{areaId:"331021",area:"玉环县"},{areaId:"331022",area:"三门县"},{areaId:"331023",area:"天台县"},{areaId:"331024",area:"仙居县"},{areaId:"331081",area:"温岭市"},{areaId:"331082",area:"临海市"}]},{cityId:"331100",city:"丽水市",areas:[{areaId:"331101",area:"市辖区"},{areaId:"331102",area:"莲都区"},{areaId:"331121",area:"青田县"},{areaId:"331122",area:"缙云县"},{areaId:"331123",area:"遂昌县"},{areaId:"331124",area:"松阳县"},{areaId:"331125",area:"云和县"},{areaId:"331126",area:"庆元县"},{areaId:"331127",area:"景宁畲族自治县"},{areaId:"331181",area:"龙泉市"}]}]},{provinceId:"340000",province:"安徽省",citys:[{cityId:"340100",city:"合肥市",areas:[{areaId:"340101",area:"市辖区"},{areaId:"340102",area:"瑶海区"},{areaId:"340103",area:"庐阳区"},{areaId:"340104",area:"蜀山区"},{areaId:"340111",area:"包河区"},{areaId:"340121",area:"长丰县"},{areaId:"340122",area:"肥东县"},{areaId:"340123",area:"肥西县"}]},{cityId:"340200",city:"芜湖市",areas:[{areaId:"340201",area:"市辖区"},{areaId:"340202",area:"镜湖区"},{areaId:"340203",area:"马塘区"},{areaId:"340204",area:"新芜区"},{areaId:"340207",area:"鸠江区"},{areaId:"340221",area:"芜湖县"},{areaId:"340222",area:"繁昌县"},{areaId:"340223",area:"南陵县"}]},{cityId:"340300",city:"蚌埠市",areas:[{areaId:"340301",area:"市辖区"},{areaId:"340302",area:"龙子湖区"},{areaId:"340303",area:"蚌山区"},{areaId:"340304",area:"禹会区"},{areaId:"340311",area:"淮上区"},{areaId:"340321",area:"怀远县"},{areaId:"340322",area:"五河县"},{areaId:"340323",area:"固镇县"}]},{cityId:"340400",city:"淮南市",areas:[{areaId:"340401",area:"市辖区"},{areaId:"340402",area:"大通区"},{areaId:"340403",area:"田家庵区"},{areaId:"340404",area:"谢家集区"},{areaId:"340405",area:"八公山区"},{areaId:"340406",area:"潘集区"},{areaId:"340421",area:"凤台县"}]},{cityId:"340500",city:"马鞍山市",areas:[{areaId:"340501",area:"市辖区"},{areaId:"340502",area:"金家庄区"},{areaId:"340503",area:"花山区"},{areaId:"340504",area:"雨山区"},{areaId:"340521",area:"当涂县"}]},{cityId:"340600",city:"淮北市",areas:[{areaId:"340601",area:"市辖区"},{areaId:"340602",area:"杜集区"},{areaId:"340603",area:"相山区"},{areaId:"340604",area:"烈山区"},{areaId:"340621",area:"濉溪县"}]},{cityId:"340700",city:"铜陵市",areas:[{areaId:"340701",area:"市辖区"},{areaId:"340702",area:"铜官山区"},{areaId:"340703",area:"狮子山区"},{areaId:"340711",area:"郊　区"},{areaId:"340721",area:"铜陵县"}]},{cityId:"340800",city:"安庆市",areas:[{areaId:"340801",area:"市辖区"},{areaId:"340802",area:"迎江区"},{areaId:"340803",area:"大观区"},{areaId:"340811",area:"郊　区"},{areaId:"340822",area:"怀宁县"},{areaId:"340823",area:"枞阳县"},{areaId:"340824",area:"潜山县"},{areaId:"340825",area:"太湖县"},{areaId:"340826",area:"宿松县"},{areaId:"340827",area:"望江县"},{areaId:"340828",area:"岳西县"},{areaId:"340881",area:"桐城市"}]},{cityId:"341000",city:"黄山市",areas:[{areaId:"341001",area:"市辖区"},{areaId:"341002",area:"屯溪区"},{areaId:"341003",area:"黄山区"},{areaId:"341004",area:"徽州区"},{areaId:"341021",area:"歙　县"},{areaId:"341022",area:"休宁县"},{areaId:"341023",area:"黟　县"},{areaId:"341024",area:"祁门县"}]},{cityId:"341100",city:"滁州市",areas:[{areaId:"341101",area:"市辖区"},{areaId:"341102",area:"琅琊区"},{areaId:"341103",area:"南谯区"},{areaId:"341122",area:"来安县"},{areaId:"341124",area:"全椒县"},{areaId:"341125",area:"定远县"},{areaId:"341126",area:"凤阳县"},{areaId:"341181",area:"天长市"},{areaId:"341182",area:"明光市"}]},{cityId:"341200",city:"阜阳市",areas:[{areaId:"341201",area:"市辖区"},{areaId:"341202",area:"颍州区"},{areaId:"341203",area:"颍东区"},{areaId:"341204",area:"颍泉区"},{areaId:"341221",area:"临泉县"},{areaId:"341222",area:"太和县"},{areaId:"341225",area:"阜南县"},{areaId:"341226",area:"颍上县"},{areaId:"341282",area:"界首市"}]},{cityId:"341300",city:"宿州市",areas:[{areaId:"341301",area:"市辖区"},{areaId:"341302",area:"墉桥区"},{areaId:"341321",area:"砀山县"},{areaId:"341322",area:"萧　县"},{areaId:"341323",area:"灵璧县"},{areaId:"341324",area:"泗　县"}]},{cityId:"341400",city:"巢湖市",areas:[{areaId:"341401",area:"市辖区"},{areaId:"341402",area:"居巢区"},{areaId:"341421",area:"庐江县"},{areaId:"341422",area:"无为县"},{areaId:"341423",area:"含山县"},{areaId:"341424",area:"和　县"}]},{cityId:"341500",city:"六安市",areas:[{areaId:"341501",area:"市辖区"},{areaId:"341502",area:"金安区"},{areaId:"341503",area:"裕安区"},{areaId:"341521",area:"寿　县"},{areaId:"341522",area:"霍邱县"},{areaId:"341523",area:"舒城县"},{areaId:"341524",area:"金寨县"},{areaId:"341525",area:"霍山县"}]},{cityId:"341600",city:"亳州市",areas:[{areaId:"341601",area:"市辖区"},{areaId:"341602",area:"谯城区"},{areaId:"341621",area:"涡阳县"},{areaId:"341622",area:"蒙城县"},{areaId:"341623",area:"利辛县"}]},{cityId:"341700",city:"池州市",areas:[{areaId:"341701",area:"市辖区"},{areaId:"341702",area:"贵池区"},{areaId:"341721",area:"东至县"},{areaId:"341722",area:"石台县"},{areaId:"341723",area:"青阳县"}]},{cityId:"341800",city:"宣城市",areas:[{areaId:"341801",area:"市辖区"},{areaId:"341802",area:"宣州区"},{areaId:"341821",area:"郎溪县"},{areaId:"341822",area:"广德县"},{areaId:"341823",area:"泾　县"},{areaId:"341824",area:"绩溪县"},{areaId:"341825",area:"旌德县"},{areaId:"341881",area:"宁国市"}]}]},{provinceId:"350000",province:"福建省",citys:[{cityId:"350100",city:"福州市",areas:[{areaId:"350101",area:"市辖区"},{areaId:"350102",area:"鼓楼区"},{areaId:"350103",area:"台江区"},{areaId:"350104",area:"仓山区"},{areaId:"350105",area:"马尾区"},{areaId:"350111",area:"晋安区"},{areaId:"350121",area:"闽侯县"},{areaId:"350122",area:"连江县"},{areaId:"350123",area:"罗源县"},{areaId:"350124",area:"闽清县"},{areaId:"350125",area:"永泰县"},{areaId:"350128",area:"平潭县"},{areaId:"350181",area:"福清市"},{areaId:"350182",area:"长乐市"}]},{cityId:"350200",city:"厦门市",areas:[{areaId:"350201",area:"市辖区"},{areaId:"350203",area:"思明区"},{areaId:"350205",area:"海沧区"},{areaId:"350206",area:"湖里区"},{areaId:"350211",area:"集美区"},{areaId:"350212",area:"同安区"},{areaId:"350213",area:"翔安区"}]},{cityId:"350300",city:"莆田市",areas:[{areaId:"350301",area:"市辖区"},{areaId:"350302",area:"城厢区"},{areaId:"350303",area:"涵江区"},{areaId:"350304",area:"荔城区"},{areaId:"350305",area:"秀屿区"},{areaId:"350322",area:"仙游县"}]},{cityId:"350400",city:"三明市",areas:[{areaId:"350401",area:"市辖区"},{areaId:"350402",area:"梅列区"},{areaId:"350403",area:"三元区"},{areaId:"350421",area:"明溪县"},{areaId:"350423",area:"清流县"},{areaId:"350424",area:"宁化县"},{areaId:"350425",area:"大田县"},{areaId:"350426",area:"尤溪县"},{areaId:"350427",area:"沙　县"},{areaId:"350428",area:"将乐县"},{areaId:"350429",area:"泰宁县"},{areaId:"350430",area:"建宁县"},{areaId:"350481",area:"永安市"}]},{cityId:"350500",city:"泉州市",areas:[{areaId:"350501",area:"市辖区"},{areaId:"350502",area:"鲤城区"},{areaId:"350503",area:"丰泽区"},{areaId:"350504",area:"洛江区"},{areaId:"350505",area:"泉港区"},{areaId:"350521",area:"惠安县"},{areaId:"350524",area:"安溪县"},{areaId:"350525",area:"永春县"},{areaId:"350526",area:"德化县"},{areaId:"350527",area:"金门县"},{areaId:"350581",area:"石狮市"},{areaId:"350582",area:"晋江市"},{areaId:"350583",area:"南安市"}]},{cityId:"350600",city:"漳州市",areas:[{areaId:"350601",area:"市辖区"},{areaId:"350602",area:"芗城区"},{areaId:"350603",area:"龙文区"},{areaId:"350622",area:"云霄县"},{areaId:"350623",area:"漳浦县"},{areaId:"350624",area:"诏安县"},{areaId:"350625",area:"长泰县"},{areaId:"350626",area:"东山县"},{areaId:"350627",area:"南靖县"},{areaId:"350628",area:"平和县"},{areaId:"350629",area:"华安县"},{areaId:"350681",area:"龙海市"}]},{cityId:"350700",city:"南平市",areas:[{areaId:"350701",area:"市辖区"},{areaId:"350702",area:"延平区"},{areaId:"350721",area:"顺昌县"},{areaId:"350722",area:"浦城县"},{areaId:"350723",area:"光泽县"},{areaId:"350724",area:"松溪县"},{areaId:"350725",area:"政和县"},{areaId:"350781",area:"邵武市"},{areaId:"350782",area:"武夷山市"},{areaId:"350783",area:"建瓯市"},{areaId:"350784",area:"建阳市"}]},{cityId:"350800",city:"龙岩市",areas:[{areaId:"350801",area:"市辖区"},{areaId:"350802",area:"新罗区"},{areaId:"350821",area:"长汀县"},{areaId:"350822",area:"永定县"},{areaId:"350823",area:"上杭县"},{areaId:"350824",area:"武平县"},{areaId:"350825",area:"连城县"},{areaId:"350881",area:"漳平市"}]},{cityId:"350900",city:"宁德市",areas:[{areaId:"350901",area:"市辖区"},{areaId:"350902",area:"蕉城区"},{areaId:"350921",area:"霞浦县"},{areaId:"350922",area:"古田县"},{areaId:"350923",area:"屏南县"},{areaId:"350924",area:"寿宁县"},{areaId:"350925",area:"周宁县"},{areaId:"350926",area:"柘荣县"},{areaId:"350981",area:"福安市"},{areaId:"350982",area:"福鼎市"}]}]},{provinceId:"360000",province:"江西省",citys:[{cityId:"360100",city:"南昌市",areas:[{areaId:"360101",area:"市辖区"},{areaId:"360102",area:"东湖区"},{areaId:"360103",area:"西湖区"},{areaId:"360104",area:"青云谱区"},{areaId:"360105",area:"湾里区"},{areaId:"360111",area:"青山湖区"},{areaId:"360121",area:"南昌县"},{areaId:"360122",area:"新建县"},{areaId:"360123",area:"安义县"},{areaId:"360124",area:"进贤县"}]},{cityId:"360200",city:"景德镇市",areas:[{areaId:"360201",area:"市辖区"},{areaId:"360202",area:"昌江区"},{areaId:"360203",area:"珠山区"},{areaId:"360222",area:"浮梁县"},{areaId:"360281",area:"乐平市"}]},{cityId:"360300",city:"萍乡市",areas:[{areaId:"360301",area:"市辖区"},{areaId:"360302",area:"安源区"},{areaId:"360313",area:"湘东区"},{areaId:"360321",area:"莲花县"},{areaId:"360322",area:"上栗县"},{areaId:"360323",area:"芦溪县"}]},{cityId:"360400",city:"九江市",areas:[{areaId:"360401",area:"市辖区"},{areaId:"360402",area:"庐山区"},{areaId:"360403",area:"浔阳区"},{areaId:"360421",area:"九江县"},{areaId:"360423",area:"武宁县"},{areaId:"360424",area:"修水县"},{areaId:"360425",area:"永修县"},{areaId:"360426",area:"德安县"},{areaId:"360427",area:"星子县"},{areaId:"360428",area:"都昌县"},{areaId:"360429",area:"湖口县"},{areaId:"360430",area:"彭泽县"},{areaId:"360481",area:"瑞昌市"}]},{cityId:"360500",city:"新余市",areas:[{areaId:"360501",area:"市辖区"},{areaId:"360502",area:"渝水区"},{areaId:"360521",area:"分宜县"}]},{cityId:"360600",city:"鹰潭市",areas:[{areaId:"360601",area:"市辖区"},{areaId:"360602",area:"月湖区"},{areaId:"360622",area:"余江县"},{areaId:"360681",area:"贵溪市"}]},{cityId:"360700",city:"赣州市",areas:[{areaId:"360701",area:"市辖区"},{areaId:"360702",area:"章贡区"},{areaId:"360721",area:"赣　县"},{areaId:"360722",area:"信丰县"},{areaId:"360723",area:"大余县"},{areaId:"360724",area:"上犹县"},{areaId:"360725",area:"崇义县"},{areaId:"360726",area:"安远县"},{areaId:"360727",area:"龙南县"},{areaId:"360728",area:"定南县"},{areaId:"360729",area:"全南县"},{areaId:"360730",area:"宁都县"},{areaId:"360731",area:"于都县"},{areaId:"360732",area:"兴国县"},{areaId:"360733",area:"会昌县"},{areaId:"360734",area:"寻乌县"},{areaId:"360735",area:"石城县"},{areaId:"360781",area:"瑞金市"},{areaId:"360782",area:"南康市"}]},{cityId:"360800",city:"吉安市",areas:[{areaId:"360801",area:"市辖区"},{areaId:"360802",area:"吉州区"},{areaId:"360803",area:"青原区"},{areaId:"360821",area:"吉安县"},{areaId:"360822",area:"吉水县"},{areaId:"360823",area:"峡江县"},{areaId:"360824",area:"新干县"},{areaId:"360825",area:"永丰县"},{areaId:"360826",area:"泰和县"},{areaId:"360827",area:"遂川县"},{areaId:"360828",area:"万安县"},{areaId:"360829",area:"安福县"},{areaId:"360830",area:"永新县"},{areaId:"360881",area:"井冈山市"}]},{cityId:"360900",city:"宜春市",areas:[{areaId:"360901",area:"市辖区"},{areaId:"360902",area:"袁州区"},{areaId:"360921",area:"奉新县"},{areaId:"360922",area:"万载县"},{areaId:"360923",area:"上高县"},{areaId:"360924",area:"宜丰县"},{areaId:"360925",area:"靖安县"},{areaId:"360926",area:"铜鼓县"},{areaId:"360981",area:"丰城市"},{areaId:"360982",area:"樟树市"},{areaId:"360983",area:"高安市"}]},{cityId:"361000",city:"抚州市",areas:[{areaId:"361001",area:"市辖区"},{areaId:"361002",area:"临川区"},{areaId:"361021",area:"南城县"},{areaId:"361022",area:"黎川县"},{areaId:"361023",area:"南丰县"},{areaId:"361024",area:"崇仁县"},{areaId:"361025",area:"乐安县"},{areaId:"361026",area:"宜黄县"},{areaId:"361027",area:"金溪县"},{areaId:"361028",area:"资溪县"},{areaId:"361029",area:"东乡县"},{areaId:"361030",area:"广昌县"}]},{cityId:"361100",city:"上饶市",areas:[{areaId:"361101",area:"市辖区"},{areaId:"361102",area:"信州区"},{areaId:"361121",area:"上饶县"},{areaId:"361122",area:"广丰县"},{areaId:"361123",area:"玉山县"},{areaId:"361124",area:"铅山县"},{areaId:"361125",area:"横峰县"},{areaId:"361126",area:"弋阳县"},{areaId:"361127",area:"余干县"},{areaId:"361128",area:"鄱阳县"},{areaId:"361129",area:"万年县"},{areaId:"361130",area:"婺源县"},{areaId:"361181",area:"德兴市"}]}]},{provinceId:"370000",province:"山东省",citys:[{cityId:"370100",city:"济南市",areas:[{areaId:"370101",area:"市辖区"},{areaId:"370102",area:"历下区"},{areaId:"370103",area:"市中区"},{areaId:"370104",area:"槐荫区"},{areaId:"370105",area:"天桥区"},{areaId:"370112",area:"历城区"},{areaId:"370113",area:"长清区"},{areaId:"370124",area:"平阴县"},{areaId:"370125",area:"济阳县"},{areaId:"370126",area:"商河县"},{areaId:"370181",area:"章丘市"}]},{cityId:"370200",city:"青岛市",areas:[{areaId:"370201",area:"市辖区"},{areaId:"370202",area:"市南区"},{areaId:"370203",area:"市北区"},{areaId:"370205",area:"四方区"},{areaId:"370211",area:"黄岛区"},{areaId:"370212",area:"崂山区"},{areaId:"370213",area:"李沧区"},{areaId:"370214",area:"城阳区"},{areaId:"370281",area:"胶州市"},{areaId:"370282",area:"即墨市"},{areaId:"370283",area:"平度市"},{areaId:"370284",area:"胶南市"},{areaId:"370285",area:"莱西市"}]},{cityId:"370300",city:"淄博市",areas:[{areaId:"370301",area:"市辖区"},{areaId:"370302",area:"淄川区"},{areaId:"370303",area:"张店区"},{areaId:"370304",area:"博山区"},{areaId:"370305",area:"临淄区"},{areaId:"370306",area:"周村区"},{areaId:"370321",area:"桓台县"},{areaId:"370322",area:"高青县"},{areaId:"370323",area:"沂源县"}]},{cityId:"370400",city:"枣庄市",areas:[{areaId:"370401",area:"市辖区"},{areaId:"370402",area:"市中区"},{areaId:"370403",area:"薛城区"},{areaId:"370404",area:"峄城区"},{areaId:"370405",area:"台儿庄区"},{areaId:"370406",area:"山亭区"},{areaId:"370481",area:"滕州市"}]},{cityId:"370500",city:"东营市",areas:[{areaId:"370501",area:"市辖区"},{areaId:"370502",area:"东营区"},{areaId:"370503",area:"河口区"},{areaId:"370521",area:"垦利县"},{areaId:"370522",area:"利津县"},{areaId:"370523",area:"广饶县"}]},{cityId:"370600",city:"烟台市",areas:[{areaId:"370601",area:"市辖区"},{areaId:"370602",area:"芝罘区"},{areaId:"370611",area:"福山区"},{areaId:"370612",area:"牟平区"},{areaId:"370613",area:"莱山区"},{areaId:"370634",area:"长岛县"},{areaId:"370681",area:"龙口市"},{areaId:"370682",area:"莱阳市"},{areaId:"370683",area:"莱州市"},{areaId:"370684",area:"蓬莱市"},{areaId:"370685",area:"招远市"},{areaId:"370686",area:"栖霞市"},{areaId:"370687",area:"海阳市"}]},{cityId:"370700",city:"潍坊市",areas:[{areaId:"370701",area:"市辖区"},{areaId:"370702",area:"潍城区"},{areaId:"370703",area:"寒亭区"},{areaId:"370704",area:"坊子区"},{areaId:"370705",area:"奎文区"},{areaId:"370724",area:"临朐县"},{areaId:"370725",area:"昌乐县"},{areaId:"370781",area:"青州市"},{areaId:"370782",area:"诸城市"},{areaId:"370783",area:"寿光市"},{areaId:"370784",area:"安丘市"},{areaId:"370785",area:"高密市"},{areaId:"370786",area:"昌邑市"}]},{cityId:"370800",city:"济宁市",areas:[{areaId:"370801",area:"市辖区"},{areaId:"370802",area:"市中区"},{areaId:"370811",area:"任城区"},{areaId:"370826",area:"微山县"},{areaId:"370827",area:"鱼台县"},{areaId:"370828",area:"金乡县"},{areaId:"370829",area:"嘉祥县"},{areaId:"370830",area:"汶上县"},{areaId:"370831",area:"泗水县"},{areaId:"370832",area:"梁山县"},{areaId:"370881",area:"曲阜市"},{areaId:"370882",area:"兖州市"},{areaId:"370883",area:"邹城市"}]},{cityId:"370900",city:"泰安市",areas:[{areaId:"370901",area:"市辖区"},{areaId:"370902",area:"泰山区"},{areaId:"370903",area:"岱岳区"},{areaId:"370921",area:"宁阳县"},{areaId:"370923",area:"东平县"},{areaId:"370982",area:"新泰市"},{areaId:"370983",area:"肥城市"}]},{cityId:"371000",city:"威海市",areas:[{areaId:"371001",area:"市辖区"},{areaId:"371002",area:"环翠区"},{areaId:"371081",area:"文登市"},{areaId:"371082",area:"荣成市"},{areaId:"371083",area:"乳山市"}]},{cityId:"371100",city:"日照市",areas:[{areaId:"371101",area:"市辖区"},{areaId:"371102",area:"东港区"},{areaId:"371103",area:"岚山区"},{areaId:"371121",area:"五莲县"},{areaId:"371122",area:"莒　县"}]},{cityId:"371200",city:"莱芜市",areas:[{areaId:"371201",area:"市辖区"},{areaId:"371202",area:"莱城区"},{areaId:"371203",area:"钢城区"}]},{cityId:"371300",city:"临沂市",areas:[{areaId:"371301",area:"市辖区"},{areaId:"371302",area:"兰山区"},{areaId:"371311",area:"罗庄区"},{areaId:"371312",area:"河东区"},{areaId:"371321",area:"沂南县"},{areaId:"371322",area:"郯城县"},{areaId:"371323",area:"沂水县"},{areaId:"371324",area:"苍山县"},{areaId:"371325",area:"费　县"},{areaId:"371326",area:"平邑县"},{areaId:"371327",area:"莒南县"},{areaId:"371328",area:"蒙阴县"},{areaId:"371329",area:"临沭县"}]},{cityId:"371400",city:"德州市",areas:[{areaId:"371401",area:"市辖区"},{areaId:"371402",area:"德城区"},{areaId:"371421",area:"陵　县"},{areaId:"371422",area:"宁津县"},{areaId:"371423",area:"庆云县"},{areaId:"371424",area:"临邑县"},{areaId:"371425",area:"齐河县"},{areaId:"371426",area:"平原县"},{areaId:"371427",area:"夏津县"},{areaId:"371428",area:"武城县"},{areaId:"371481",area:"乐陵市"},{areaId:"371482",area:"禹城市"}]},{cityId:"371500",city:"聊城市",areas:[{areaId:"371501",area:"市辖区"},{areaId:"371502",area:"东昌府区"},{areaId:"371521",area:"阳谷县"},{areaId:"371522",area:"莘　县"},{areaId:"371523",area:"茌平县"},{areaId:"371524",area:"东阿县"},{areaId:"371525",area:"冠　县"},{areaId:"371526",area:"高唐县"},{areaId:"371581",area:"临清市"}]},{cityId:"371600",city:"滨州市",areas:[{areaId:"371601",area:"市辖区"},{areaId:"371602",area:"滨城区"},{areaId:"371621",area:"惠民县"},{areaId:"371622",area:"阳信县"},{areaId:"371623",area:"无棣县"},{areaId:"371624",area:"沾化县"},{areaId:"371625",area:"博兴县"},{areaId:"371626",area:"邹平县"}]},{cityId:"371700",city:"荷泽市",areas:[{areaId:"371701",area:"市辖区"},{areaId:"371702",area:"牡丹区"},{areaId:"371721",area:"曹　县"},{areaId:"371722",area:"单　县"},{areaId:"371723",area:"成武县"},{areaId:"371724",area:"巨野县"},{areaId:"371725",area:"郓城县"},{areaId:"371726",area:"鄄城县"},{areaId:"371727",area:"定陶县"},{areaId:"371728",area:"东明县"}]}]},{provinceId:"410000",province:"河南省",citys:[{cityId:"410100",city:"郑州市",areas:[{areaId:"410101",area:"市辖区"},{areaId:"410102",area:"中原区"},{areaId:"410103",area:"二七区"},{areaId:"410104",area:"管城回族区"},{areaId:"410105",area:"金水区"},{areaId:"410106",area:"上街区"},{areaId:"410108",area:"邙山区"},{areaId:"410122",area:"中牟县"},{areaId:"410181",area:"巩义市"},{areaId:"410182",area:"荥阳市"},{areaId:"410183",area:"新密市"},{areaId:"410184",area:"新郑市"},{areaId:"410185",area:"登封市"}]},{cityId:"410200",city:"开封市",areas:[{areaId:"410201",area:"市辖区"},{areaId:"410202",area:"龙亭区"},{areaId:"410203",area:"顺河回族区"},{areaId:"410204",area:"鼓楼区"},{areaId:"410205",area:"南关区"},{areaId:"410211",area:"郊　区"},{areaId:"410221",area:"杞　县"},{areaId:"410222",area:"通许县"},{areaId:"410223",area:"尉氏县"},{areaId:"410224",area:"开封县"},{areaId:"410225",area:"兰考县"}]},{cityId:"410300",city:"洛阳市",areas:[{areaId:"410301",area:"市辖区"},{areaId:"410302",area:"老城区"},{areaId:"410303",area:"西工区"},{areaId:"410304",area:"廛河回族区"},{areaId:"410305",area:"涧西区"},{areaId:"410306",area:"吉利区"},{areaId:"410307",area:"洛龙区"},{areaId:"410322",area:"孟津县"},{areaId:"410323",area:"新安县"},{areaId:"410324",area:"栾川县"},{areaId:"410325",area:"嵩　县"},{areaId:"410326",area:"汝阳县"},{areaId:"410327",area:"宜阳县"},{areaId:"410328",area:"洛宁县"},{areaId:"410329",area:"伊川县"},{areaId:"410381",area:"偃师市"}]},{cityId:"410400",city:"平顶山市",areas:[{areaId:"410401",area:"市辖区"},{areaId:"410402",area:"新华区"},{areaId:"410403",area:"卫东区"},{areaId:"410404",area:"石龙区"},{areaId:"410411",area:"湛河区"},{areaId:"410421",area:"宝丰县"},{areaId:"410422",area:"叶　县"},{areaId:"410423",area:"鲁山县"},{areaId:"410425",area:"郏　县"},{areaId:"410481",area:"舞钢市"},{areaId:"410482",area:"汝州市"}]},{cityId:"410500",city:"安阳市",areas:[{areaId:"410501",area:"市辖区"},{areaId:"410502",area:"文峰区"},{areaId:"410503",area:"北关区"},{areaId:"410505",area:"殷都区"},{areaId:"410506",area:"龙安区"},{areaId:"410522",area:"安阳县"},{areaId:"410523",area:"汤阴县"},{areaId:"410526",area:"滑　县"},{areaId:"410527",area:"内黄县"},{areaId:"410581",area:"林州市"}]},{cityId:"410600",city:"鹤壁市",areas:[{areaId:"410601",area:"市辖区"},{areaId:"410602",area:"鹤山区"},{areaId:"410603",area:"山城区"},{areaId:"410611",area:"淇滨区"},{areaId:"410621",area:"浚　县"},{areaId:"410622",area:"淇　县"}]},{cityId:"410700",city:"新乡市",areas:[{areaId:"410701",area:"市辖区"},{areaId:"410702",area:"红旗区"},{areaId:"410703",area:"卫滨区"},{areaId:"410704",area:"凤泉区"},{areaId:"410711",area:"牧野区"},{areaId:"410721",area:"新乡县"},{areaId:"410724",area:"获嘉县"},{areaId:"410725",area:"原阳县"},{areaId:"410726",area:"延津县"},{areaId:"410727",area:"封丘县"},{areaId:"410728",area:"长垣县"},{areaId:"410781",area:"卫辉市"},{areaId:"410782",area:"辉县市"}]},{cityId:"410800",city:"焦作市",areas:[{areaId:"410801",area:"市辖区"},{areaId:"410802",area:"解放区"},{areaId:"410803",area:"中站区"},{areaId:"410804",area:"马村区"},{areaId:"410811",area:"山阳区"},{areaId:"410821",area:"修武县"},{areaId:"410822",area:"博爱县"},{areaId:"410823",area:"武陟县"},{areaId:"410825",area:"温　县"},{areaId:"410881",area:"济源市"},{areaId:"410882",area:"沁阳市"},{areaId:"410883",area:"孟州市"}]},{cityId:"410900",city:"濮阳市",areas:[{areaId:"410901",area:"市辖区"},{areaId:"410902",area:"华龙区"},{areaId:"410922",area:"清丰县"},{areaId:"410923",area:"南乐县"},{areaId:"410926",area:"范　县"},{areaId:"410927",area:"台前县"},{areaId:"410928",area:"濮阳县"}]},{cityId:"411000",city:"许昌市",areas:[{areaId:"411001",area:"市辖区"},{areaId:"411002",area:"魏都区"},{areaId:"411023",area:"许昌县"},{areaId:"411024",area:"鄢陵县"},{areaId:"411025",area:"襄城县"},{areaId:"411081",area:"禹州市"},{areaId:"411082",area:"长葛市"}]},{cityId:"411100",city:"漯河市",areas:[{areaId:"411101",area:"市辖区"},{areaId:"411102",area:"源汇区"},{areaId:"411103",area:"郾城区"},{areaId:"411104",area:"召陵区"},{areaId:"411121",area:"舞阳县"},{areaId:"411122",area:"临颍县"}]},{cityId:"411200",city:"三门峡市",areas:[{areaId:"411201",area:"市辖区"},{areaId:"411202",area:"湖滨区"},{areaId:"411221",area:"渑池县"},{areaId:"411222",area:"陕　县"},{areaId:"411224",area:"卢氏县"},{areaId:"411281",area:"义马市"},{areaId:"411282",area:"灵宝市"}]},{cityId:"411300",city:"南阳市",areas:[{areaId:"411301",area:"市辖区"},{areaId:"411302",area:"宛城区"},{areaId:"411303",area:"卧龙区"},{areaId:"411321",area:"南召县"},{areaId:"411322",area:"方城县"},{areaId:"411323",area:"西峡县"},{areaId:"411324",area:"镇平县"},{areaId:"411325",area:"内乡县"},{areaId:"411326",area:"淅川县"},{areaId:"411327",area:"社旗县"},{areaId:"411328",area:"唐河县"},{areaId:"411329",area:"新野县"},{areaId:"411330",area:"桐柏县"},{areaId:"411381",area:"邓州市"}]},{cityId:"411400",city:"商丘市",areas:[{areaId:"411401",area:"市辖区"},{areaId:"411402",area:"梁园区"},{areaId:"411403",area:"睢阳区"},{areaId:"411421",area:"民权县"},{areaId:"411422",area:"睢　县"},{areaId:"411423",area:"宁陵县"},{areaId:"411424",area:"柘城县"},{areaId:"411425",area:"虞城县"},{areaId:"411426",area:"夏邑县"},{areaId:"411481",area:"永城市"}]},{cityId:"411500",city:"信阳市",areas:[{areaId:"411501",area:"市辖区"},{areaId:"411502",area:"师河区"},{areaId:"411503",area:"平桥区"},{areaId:"411521",area:"罗山县"},{areaId:"411522",area:"光山县"},{areaId:"411523",area:"新　县"},{areaId:"411524",area:"商城县"},{areaId:"411525",area:"固始县"},{areaId:"411526",area:"潢川县"},{areaId:"411527",area:"淮滨县"},{areaId:"411528",area:"息　县"}]},{cityId:"411600",city:"周口市",areas:[{areaId:"411601",area:"市辖区"},{areaId:"411602",area:"川汇区"},{areaId:"411621",area:"扶沟县"},{areaId:"411622",area:"西华县"},{areaId:"411623",area:"商水县"},{areaId:"411624",area:"沈丘县"},{areaId:"411625",area:"郸城县"},{areaId:"411626",area:"淮阳县"},{areaId:"411627",area:"太康县"},{areaId:"411628",area:"鹿邑县"},{areaId:"411681",area:"项城市"}]},{cityId:"411700",city:"驻马店市",areas:[{areaId:"411701",area:"市辖区"},{areaId:"411702",area:"驿城区"},{areaId:"411721",area:"西平县"},{areaId:"411722",area:"上蔡县"},{areaId:"411723",area:"平舆县"},{areaId:"411724",area:"正阳县"},{areaId:"411725",area:"确山县"},{areaId:"411726",area:"泌阳县"},{areaId:"411727",area:"汝南县"},{areaId:"411728",area:"遂平县"},{areaId:"411729",area:"新蔡县"}]}]},{provinceId:"420000",province:"湖北省",citys:[{cityId:"420100",city:"武汉市",areas:[{areaId:"420101",area:"市辖区"},{areaId:"420102",area:"江岸区"},{areaId:"420103",area:"江汉区"},{areaId:"420104",area:"乔口区"},{areaId:"420105",area:"汉阳区"},{areaId:"420106",area:"武昌区"},{areaId:"420107",area:"青山区"},{areaId:"420111",area:"洪山区"},{areaId:"420112",area:"东西湖区"},{areaId:"420113",area:"汉南区"},{areaId:"420114",area:"蔡甸区"},{areaId:"420115",area:"江夏区"},{areaId:"420116",area:"黄陂区"},{areaId:"420117",area:"新洲区"}]},{cityId:"420200",city:"黄石市",areas:[{areaId:"420201",area:"市辖区"},{areaId:"420202",area:"黄石港区"},{areaId:"420203",area:"西塞山区"},{areaId:"420204",area:"下陆区"},{areaId:"420205",area:"铁山区"},{areaId:"420222",area:"阳新县"},{areaId:"420281",area:"大冶市"}]},{cityId:"420300",city:"十堰市",areas:[{areaId:"420301",area:"市辖区"},{areaId:"420302",area:"茅箭区"},{areaId:"420303",area:"张湾区"},{areaId:"420321",area:"郧　县"},{areaId:"420322",area:"郧西县"},{areaId:"420323",area:"竹山县"},{areaId:"420324",area:"竹溪县"},{areaId:"420325",area:"房　县"},{areaId:"420381",area:"丹江口市"}]},{cityId:"420500",city:"宜昌市",areas:[{areaId:"420501",area:"市辖区"},{areaId:"420502",area:"西陵区"},{areaId:"420503",area:"伍家岗区"},{areaId:"420504",area:"点军区"},{areaId:"420505",area:"猇亭区"},{areaId:"420506",area:"夷陵区"},{areaId:"420525",area:"远安县"},{areaId:"420526",area:"兴山县"},{areaId:"420527",area:"秭归县"},{areaId:"420528",area:"长阳土家族自治县"},{areaId:"420529",area:"五峰土家族自治县"},{areaId:"420581",area:"宜都市"},{areaId:"420582",area:"当阳市"},{areaId:"420583",area:"枝江市"}]},{cityId:"420600",city:"襄樊市",areas:[{areaId:"420601",area:"市辖区"},{areaId:"420602",area:"襄城区"},{areaId:"420606",area:"樊城区"},{areaId:"420607",area:"襄阳区"},{areaId:"420624",area:"南漳县"},{areaId:"420625",area:"谷城县"},{areaId:"420626",area:"保康县"},{areaId:"420682",area:"老河口市"},{areaId:"420683",area:"枣阳市"},{areaId:"420684",area:"宜城市"}]},{cityId:"420700",city:"鄂州市",areas:[{areaId:"420701",area:"市辖区"},{areaId:"420702",area:"梁子湖区"},{areaId:"420703",area:"华容区"},{areaId:"420704",area:"鄂城区"}]},{cityId:"420800",city:"荆门市",areas:[{areaId:"420801",area:"市辖区"},{areaId:"420802",area:"东宝区"},{areaId:"420804",area:"掇刀区"},{areaId:"420821",area:"京山县"},{areaId:"420822",area:"沙洋县"},{areaId:"420881",area:"钟祥市"}]},{cityId:"420900",city:"孝感市",areas:[{areaId:"420901",area:"市辖区"},{areaId:"420902",area:"孝南区"},{areaId:"420921",area:"孝昌县"},{areaId:"420922",area:"大悟县"},{areaId:"420923",area:"云梦县"},{areaId:"420981",area:"应城市"},{areaId:"420982",area:"安陆市"},{areaId:"420984",area:"汉川市"}]},{cityId:"421000",city:"荆州市",areas:[{areaId:"421001",area:"市辖区"},{areaId:"421002",area:"沙市区"},{areaId:"421003",area:"荆州区"},{areaId:"421022",area:"公安县"},{areaId:"421023",area:"监利县"},{areaId:"421024",area:"江陵县"},{areaId:"421081",area:"石首市"},{areaId:"421083",area:"洪湖市"},{areaId:"421087",area:"松滋市"}]},{cityId:"421100",city:"黄冈市",areas:[{areaId:"421101",area:"市辖区"},{areaId:"421102",area:"黄州区"},{areaId:"421121",area:"团风县"},{areaId:"421122",area:"红安县"},{areaId:"421123",area:"罗田县"},{areaId:"421124",area:"英山县"},{areaId:"421125",area:"浠水县"},{areaId:"421126",area:"蕲春县"},{areaId:"421127",area:"黄梅县"},{areaId:"421181",area:"麻城市"},{areaId:"421182",area:"武穴市"}]},{cityId:"421200",city:"咸宁市",areas:[{areaId:"421201",area:"市辖区"},{areaId:"421202",area:"咸安区"},{areaId:"421221",area:"嘉鱼县"},{areaId:"421222",area:"通城县"},{areaId:"421223",area:"崇阳县"},{areaId:"421224",area:"通山县"},{areaId:"421281",area:"赤壁市"}]},{cityId:"421300",city:"随州市",areas:[{areaId:"421301",area:"市辖区"},{areaId:"421302",area:"曾都区"},{areaId:"421381",area:"广水市"}]},{cityId:"422800",city:"恩施土家族苗族自治州",areas:[{areaId:"422801",area:"恩施市"},{areaId:"422802",area:"利川市"},{areaId:"422822",area:"建始县"},{areaId:"422823",area:"巴东县"},{areaId:"422825",area:"宣恩县"},{areaId:"422826",area:"咸丰县"},{areaId:"422827",area:"来凤县"},{areaId:"422828",area:"鹤峰县"}]},{cityId:"429000",city:"省直辖行政单位",areas:[{areaId:"429004",area:"仙桃市"},{areaId:"429005",area:"潜江市"},{areaId:"429006",area:"天门市"},{areaId:"429021",area:"神农架林区"}]}]},{provinceId:"430000",province:"湖南省",citys:[{cityId:"430100",city:"长沙市",areas:[{areaId:"430101",area:"市辖区"},{areaId:"430102",area:"芙蓉区"},{areaId:"430103",area:"天心区"},{areaId:"430104",area:"岳麓区"},{areaId:"430105",area:"开福区"},{areaId:"430111",area:"雨花区"},{areaId:"430121",area:"长沙县"},{areaId:"430122",area:"望城县"},{areaId:"430124",area:"宁乡县"},{areaId:"430181",area:"浏阳市"}]},{cityId:"430200",city:"株洲市",areas:[{areaId:"430201",area:"市辖区"},{areaId:"430202",area:"荷塘区"},{areaId:"430203",area:"芦淞区"},{areaId:"430204",area:"石峰区"},{areaId:"430211",area:"天元区"},{areaId:"430221",area:"株洲县"},{areaId:"430223",area:"攸　县"},{areaId:"430224",area:"茶陵县"},{areaId:"430225",area:"炎陵县"},{areaId:"430281",area:"醴陵市"}]},{cityId:"430300",city:"湘潭市",areas:[{areaId:"430301",area:"市辖区"},{areaId:"430302",area:"雨湖区"},{areaId:"430304",area:"岳塘区"},{areaId:"430321",area:"湘潭县"},{areaId:"430381",area:"湘乡市"},{areaId:"430382",area:"韶山市"}]},{cityId:"430400",city:"衡阳市",areas:[{areaId:"430401",area:"市辖区"},{areaId:"430405",area:"珠晖区"},{areaId:"430406",area:"雁峰区"},{areaId:"430407",area:"石鼓区"},{areaId:"430408",area:"蒸湘区"},{areaId:"430412",area:"南岳区"},{areaId:"430421",area:"衡阳县"},{areaId:"430422",area:"衡南县"},{areaId:"430423",area:"衡山县"},{areaId:"430424",area:"衡东县"},{areaId:"430426",area:"祁东县"},{areaId:"430481",area:"耒阳市"},{areaId:"430482",area:"常宁市"}]},{cityId:"430500",city:"邵阳市",areas:[{areaId:"430501",area:"市辖区"},{areaId:"430502",area:"双清区"},{areaId:"430503",area:"大祥区"},{areaId:"430511",area:"北塔区"},{areaId:"430521",area:"邵东县"},{areaId:"430522",area:"新邵县"},{areaId:"430523",area:"邵阳县"},{areaId:"430524",area:"隆回县"},{areaId:"430525",area:"洞口县"},{areaId:"430527",area:"绥宁县"},{areaId:"430528",area:"新宁县"},{areaId:"430529",area:"城步苗族自治县"},{areaId:"430581",area:"武冈市"}]},{cityId:"430600",city:"岳阳市",areas:[{areaId:"430601",area:"市辖区"},{areaId:"430602",area:"岳阳楼区"},{areaId:"430603",area:"云溪区"},{areaId:"430611",area:"君山区"},{areaId:"430621",area:"岳阳县"},{areaId:"430623",area:"华容县"},{areaId:"430624",area:"湘阴县"},{areaId:"430626",area:"平江县"},{areaId:"430681",area:"汨罗市"},{areaId:"430682",area:"临湘市"}]},{cityId:"430700",city:"常德市",areas:[{areaId:"430701",area:"市辖区"},{areaId:"430702",area:"武陵区"},{areaId:"430703",area:"鼎城区"},{areaId:"430721",area:"安乡县"},{areaId:"430722",area:"汉寿县"},{areaId:"430723",area:"澧　县"},{areaId:"430724",area:"临澧县"},{areaId:"430725",area:"桃源县"},{areaId:"430726",area:"石门县"},{areaId:"430781",area:"津市市"}]},{cityId:"430800",city:"张家界市",areas:[{areaId:"430801",area:"市辖区"},{areaId:"430802",area:"永定区"},{areaId:"430811",area:"武陵源区"},{areaId:"430821",area:"慈利县"},{areaId:"430822",area:"桑植县"}]},{cityId:"430900",city:"益阳市",areas:[{areaId:"430901",area:"市辖区"},{areaId:"430902",area:"资阳区"},{areaId:"430903",area:"赫山区"},{areaId:"430921",area:"南　县"},{areaId:"430922",area:"桃江县"},{areaId:"430923",area:"安化县"},{areaId:"430981",area:"沅江市"}]},{cityId:"431000",city:"郴州市",areas:[{areaId:"431001",area:"市辖区"},{areaId:"431002",area:"北湖区"},{areaId:"431003",area:"苏仙区"},{areaId:"431021",area:"桂阳县"},{areaId:"431022",area:"宜章县"},{areaId:"431023",area:"永兴县"},{areaId:"431024",area:"嘉禾县"},{areaId:"431025",area:"临武县"},{areaId:"431026",area:"汝城县"},{areaId:"431027",area:"桂东县"},{areaId:"431028",area:"安仁县"},{areaId:"431081",area:"资兴市"}]},{cityId:"431100",city:"永州市",areas:[{areaId:"431101",area:"市辖区"},{areaId:"431102",area:"芝山区"},{areaId:"431103",area:"冷水滩区"},{areaId:"431121",area:"祁阳县"},{areaId:"431122",area:"东安县"},{areaId:"431123",area:"双牌县"},{areaId:"431124",area:"道　县"},{areaId:"431125",area:"江永县"},{areaId:"431126",area:"宁远县"},{areaId:"431127",area:"蓝山县"},{areaId:"431128",area:"新田县"},{areaId:"431129",area:"江华瑶族自治县"}]},{cityId:"431200",city:"怀化市",areas:[{areaId:"431201",area:"市辖区"},{areaId:"431202",area:"鹤城区"},{areaId:"431221",area:"中方县"},{areaId:"431222",area:"沅陵县"},{areaId:"431223",area:"辰溪县"},{areaId:"431224",area:"溆浦县"},{areaId:"431225",area:"会同县"},{areaId:"431226",area:"麻阳苗族自治县"},{areaId:"431227",area:"新晃侗族自治县"},{areaId:"431228",area:"芷江侗族自治县"},{areaId:"431229",area:"靖州苗族侗族自治县"},{areaId:"431230",area:"通道侗族自治县"},{areaId:"431281",area:"洪江市"}]},{cityId:"431300",city:"娄底市",areas:[{areaId:"431301",area:"市辖区"},{areaId:"431302",area:"娄星区"},{areaId:"431321",area:"双峰县"},{areaId:"431322",area:"新化县"},{areaId:"431381",area:"冷水江市"},{areaId:"431382",area:"涟源市"}]},{cityId:"433100",city:"湘西土家族苗族自治州",areas:[{areaId:"433101",area:"吉首市"},{areaId:"433122",area:"泸溪县"},{areaId:"433123",area:"凤凰县"},{areaId:"433124",area:"花垣县"},{areaId:"433125",area:"保靖县"},{areaId:"433126",area:"古丈县"},{areaId:"433127",area:"永顺县"},{areaId:"433130",area:"龙山县"}]}]},{provinceId:"440000",province:"广东省",citys:[{cityId:"440100",city:"广州市",areas:[{areaId:"440101",area:"市辖区"},{areaId:"440102",area:"东山区"},{areaId:"440103",area:"荔湾区"},{areaId:"440104",area:"越秀区"},{areaId:"440105",area:"海珠区"},{areaId:"440106",area:"天河区"},{areaId:"440107",area:"芳村区"},{areaId:"440111",area:"白云区"},{areaId:"440112",area:"黄埔区"},{areaId:"440113",area:"番禺区"},{areaId:"440114",area:"花都区"},{areaId:"440183",area:"增城市"},{areaId:"440184",area:"从化市"}]},{cityId:"440200",city:"韶关市",areas:[{areaId:"440201",area:"市辖区"},{areaId:"440203",area:"武江区"},{areaId:"440204",area:"浈江区"},{areaId:"440205",area:"曲江区"},{areaId:"440222",area:"始兴县"},{areaId:"440224",area:"仁化县"},{areaId:"440229",area:"翁源县"},{areaId:"440232",area:"乳源瑶族自治县"},{areaId:"440233",area:"新丰县"},{areaId:"440281",area:"乐昌市"},{areaId:"440282",area:"南雄市"}]},{cityId:"440300",city:"深圳市",areas:[{areaId:"440301",area:"市辖区"},{areaId:"440303",area:"罗湖区"},{areaId:"440304",area:"福田区"},{areaId:"440305",area:"南山区"},{areaId:"440306",area:"宝安区"},{areaId:"440307",area:"龙岗区"},{areaId:"440308",area:"盐田区"}]},{cityId:"440400",city:"珠海市",areas:[{areaId:"440401",area:"市辖区"},{areaId:"440402",area:"香洲区"},{areaId:"440403",area:"斗门区"},{areaId:"440404",area:"金湾区"}]},{cityId:"440500",city:"汕头市",areas:[{areaId:"440501",area:"市辖区"},{areaId:"440507",area:"龙湖区"},{areaId:"440511",area:"金平区"},{areaId:"440512",area:"濠江区"},{areaId:"440513",area:"潮阳区"},{areaId:"440514",area:"潮南区"},{areaId:"440515",area:"澄海区"},{areaId:"440523",area:"南澳县"}]},{cityId:"440600",city:"佛山市",areas:[{areaId:"440601",area:"市辖区"},{areaId:"440604",area:"禅城区"},{areaId:"440605",area:"南海区"},{areaId:"440606",area:"顺德区"},{areaId:"440607",area:"三水区"},{areaId:"440608",area:"高明区"}]},{cityId:"440700",city:"江门市",areas:[{areaId:"440701",area:"市辖区"},{areaId:"440703",area:"蓬江区"},{areaId:"440704",area:"江海区"},{areaId:"440705",area:"新会区"},{areaId:"440781",area:"台山市"},{areaId:"440783",area:"开平市"},{areaId:"440784",area:"鹤山市"},{areaId:"440785",area:"恩平市"}]},{cityId:"440800",city:"湛江市",areas:[{areaId:"440801",area:"市辖区"},{areaId:"440802",area:"赤坎区"},{areaId:"440803",area:"霞山区"},{areaId:"440804",area:"坡头区"},{areaId:"440811",area:"麻章区"},{areaId:"440823",area:"遂溪县"},{areaId:"440825",area:"徐闻县"},{areaId:"440881",area:"廉江市"},{areaId:"440882",area:"雷州市"},{areaId:"440883",area:"吴川市"}]},{cityId:"440900",city:"茂名市",areas:[{areaId:"440901",area:"市辖区"},{areaId:"440902",area:"茂南区"},{areaId:"440903",area:"茂港区"},{areaId:"440923",area:"电白县"},{areaId:"440981",area:"高州市"},{areaId:"440982",area:"化州市"},{areaId:"440983",area:"信宜市"}]},{cityId:"441200",city:"肇庆市",areas:[{areaId:"441201",area:"市辖区"},{areaId:"441202",area:"端州区"},{areaId:"441203",area:"鼎湖区"},{areaId:"441223",area:"广宁县"},{areaId:"441224",area:"怀集县"},{areaId:"441225",area:"封开县"},{areaId:"441226",area:"德庆县"},{areaId:"441283",area:"高要市"},{areaId:"441284",area:"四会市"}]},{cityId:"441300",city:"惠州市",areas:[{areaId:"441301",area:"市辖区"},{areaId:"441302",area:"惠城区"},{areaId:"441303",area:"惠阳区"},{areaId:"441322",area:"博罗县"},{areaId:"441323",area:"惠东县"},{areaId:"441324",area:"龙门县"}]},{cityId:"441400",city:"梅州市",areas:[{areaId:"441401",area:"市辖区"},{areaId:"441402",area:"梅江区"},{areaId:"441421",area:"梅　县"},{areaId:"441422",area:"大埔县"},{areaId:"441423",area:"丰顺县"},{areaId:"441424",area:"五华县"},{areaId:"441426",area:"平远县"},{areaId:"441427",area:"蕉岭县"},{areaId:"441481",area:"兴宁市"}]},{cityId:"441500",city:"汕尾市",areas:[{areaId:"441501",area:"市辖区"},{areaId:"441502",area:"城　区"},{areaId:"441521",area:"海丰县"},{areaId:"441523",area:"陆河县"},{areaId:"441581",area:"陆丰市"}]},{cityId:"441600",city:"河源市",areas:[{areaId:"441601",area:"市辖区"},{areaId:"441602",area:"源城区"},{areaId:"441621",area:"紫金县"},{areaId:"441622",area:"龙川县"},{areaId:"441623",area:"连平县"},{areaId:"441624",area:"和平县"},{areaId:"441625",area:"东源县"}]},{cityId:"441700",city:"阳江市",areas:[{areaId:"441701",area:"市辖区"},{areaId:"441702",area:"江城区"},{areaId:"441721",area:"阳西县"},{areaId:"441723",area:"阳东县"},{areaId:"441781",area:"阳春市"}]},{cityId:"441800",city:"清远市",areas:[{areaId:"441801",area:"市辖区"},{areaId:"441802",area:"清城区"},{areaId:"441821",area:"佛冈县"},{areaId:"441823",area:"阳山县"},{areaId:"441825",area:"连山壮族瑶族自治县"},{areaId:"441826",area:"连南瑶族自治县"},{areaId:"441827",area:"清新县"},{areaId:"441881",area:"英德市"},{areaId:"441882",area:"连州市"}]},{cityId:"441900",city:"东莞市",areas:[]},{cityId:"442000",city:"中山市",areas:[]},{cityId:"445100",city:"潮州市",areas:[{areaId:"445101",area:"市辖区"},{areaId:"445102",area:"湘桥区"},{areaId:"445121",area:"潮安县"},{areaId:"445122",area:"饶平县"}]},{cityId:"445200",city:"揭阳市",areas:[{areaId:"445201",area:"市辖区"},{areaId:"445202",area:"榕城区"},{areaId:"445221",area:"揭东县"},{areaId:"445222",area:"揭西县"},{areaId:"445224",area:"惠来县"},{areaId:"445281",area:"普宁市"}]},{cityId:"445300",city:"云浮市",areas:[{areaId:"445301",area:"市辖区"},{areaId:"445302",area:"云城区"},{areaId:"445321",area:"新兴县"},{areaId:"445322",area:"郁南县"},{areaId:"445323",area:"云安县"},{areaId:"445381",area:"罗定市"}]}]},{provinceId:"450000",province:"广西壮族自治区",citys:[{cityId:"450100",city:"南宁市",areas:[{areaId:"450101",area:"市辖区"},{areaId:"450102",area:"兴宁区"},{areaId:"450103",area:"青秀区"},{areaId:"450105",area:"江南区"},{areaId:"450107",area:"西乡塘区"},{areaId:"450108",area:"良庆区"},{areaId:"450109",area:"邕宁区"},{areaId:"450122",area:"武鸣县"},{areaId:"450123",area:"隆安县"},{areaId:"450124",area:"马山县"},{areaId:"450125",area:"上林县"},{areaId:"450126",area:"宾阳县"},{areaId:"450127",area:"横　县"}]},{cityId:"450200",city:"柳州市",areas:[{areaId:"450201",area:"市辖区"},{areaId:"450202",area:"城中区"},{areaId:"450203",area:"鱼峰区"},{areaId:"450204",area:"柳南区"},{areaId:"450205",area:"柳北区"},{areaId:"450221",area:"柳江县"},{areaId:"450222",area:"柳城县"},{areaId:"450223",area:"鹿寨县"},{areaId:"450224",area:"融安县"},{areaId:"450225",area:"融水苗族自治县"},{areaId:"450226",area:"三江侗族自治县"}]},{cityId:"450300",city:"桂林市",areas:[{areaId:"450301",area:"市辖区"},{areaId:"450302",area:"秀峰区"},{areaId:"450303",area:"叠彩区"},{areaId:"450304",area:"象山区"},{areaId:"450305",area:"七星区"},{areaId:"450311",area:"雁山区"},{areaId:"450321",area:"阳朔县"},{areaId:"450322",area:"临桂县"},{areaId:"450323",area:"灵川县"},{areaId:"450324",area:"全州县"},{areaId:"450325",area:"兴安县"},{areaId:"450326",area:"永福县"},{areaId:"450327",area:"灌阳县"},{areaId:"450328",area:"龙胜各族自治县"},{areaId:"450329",area:"资源县"},{areaId:"450330",area:"平乐县"},{areaId:"450331",area:"荔蒲县"},{areaId:"450332",area:"恭城瑶族自治县"}]},{cityId:"450400",city:"梧州市",areas:[{areaId:"450401",area:"市辖区"},{areaId:"450403",area:"万秀区"},{areaId:"450404",area:"蝶山区"},{areaId:"450405",area:"长洲区"},{areaId:"450421",area:"苍梧县"},{areaId:"450422",area:"藤　县"},{areaId:"450423",area:"蒙山县"},{areaId:"450481",area:"岑溪市"}]},{cityId:"450500",city:"北海市",areas:[{areaId:"450501",area:"市辖区"},{areaId:"450502",area:"海城区"},{areaId:"450503",area:"银海区"},{areaId:"450512",area:"铁山港区"},{areaId:"450521",area:"合浦县"}]},{cityId:"450600",city:"防城港市",areas:[{areaId:"450601",area:"市辖区"},{areaId:"450602",area:"港口区"},{areaId:"450603",area:"防城区"},{areaId:"450621",area:"上思县"},{areaId:"450681",area:"东兴市"}]},{cityId:"450700",city:"钦州市",areas:[{areaId:"450701",area:"市辖区"},{areaId:"450702",area:"钦南区"},{areaId:"450703",area:"钦北区"},{areaId:"450721",area:"灵山县"},{areaId:"450722",area:"浦北县"}]},{cityId:"450800",city:"贵港市",areas:[{areaId:"450801",area:"市辖区"},{areaId:"450802",area:"港北区"},{areaId:"450803",area:"港南区"},{areaId:"450804",area:"覃塘区"},{areaId:"450821",area:"平南县"},{areaId:"450881",area:"桂平市"}]},{cityId:"450900",city:"玉林市",areas:[{areaId:"450901",area:"市辖区"},{areaId:"450902",area:"玉州区"},{areaId:"450921",area:"容　县"},{areaId:"450922",area:"陆川县"},{areaId:"450923",area:"博白县"},{areaId:"450924",area:"兴业县"},{areaId:"450981",area:"北流市"}]},{cityId:"451000",city:"百色市",areas:[{areaId:"451001",area:"市辖区"},{areaId:"451002",area:"右江区"},{areaId:"451021",area:"田阳县"},{areaId:"451022",area:"田东县"},{areaId:"451023",area:"平果县"},{areaId:"451024",area:"德保县"},{areaId:"451025",area:"靖西县"},{areaId:"451026",area:"那坡县"},{areaId:"451027",area:"凌云县"},{areaId:"451028",area:"乐业县"},{areaId:"451029",area:"田林县"},{areaId:"451030",area:"西林县"},{areaId:"451031",area:"隆林各族自治县"}]},{cityId:"451100",city:"贺州市",areas:[{areaId:"451101",area:"市辖区"},{areaId:"451102",area:"八步区"},{areaId:"451121",area:"昭平县"},{areaId:"451122",area:"钟山县"},{areaId:"451123",area:"富川瑶族自治县"}]},{cityId:"451200",city:"河池市",areas:[{areaId:"451201",area:"市辖区"},{areaId:"451202",area:"金城江区"},{areaId:"451221",area:"南丹县"},{areaId:"451222",area:"天峨县"},{areaId:"451223",area:"凤山县"},{areaId:"451224",area:"东兰县"},{areaId:"451225",area:"罗城仫佬族自治县"},{areaId:"451226",area:"环江毛南族自治县"},{areaId:"451227",area:"巴马瑶族自治县"},{areaId:"451228",area:"都安瑶族自治县"},{areaId:"451229",area:"大化瑶族自治县"},{areaId:"451281",area:"宜州市"}]},{cityId:"451300",city:"来宾市",areas:[{areaId:"451301",area:"市辖区"},{areaId:"451302",area:"兴宾区"},{areaId:"451321",area:"忻城县"},{areaId:"451322",area:"象州县"},{areaId:"451323",area:"武宣县"},{areaId:"451324",area:"金秀瑶族自治县"},{areaId:"451381",area:"合山市"}]},{cityId:"451400",city:"崇左市",areas:[{areaId:"451401",area:"市辖区"},{areaId:"451402",area:"江洲区"},{areaId:"451421",area:"扶绥县"},{areaId:"451422",area:"宁明县"},{areaId:"451423",area:"龙州县"},{areaId:"451424",area:"大新县"},{areaId:"451425",area:"天等县"},{areaId:"451481",area:"凭祥市"}]}]},{provinceId:"460000",province:"海南省",citys:[{cityId:"460100",city:"海口市",areas:[{areaId:"460101",area:"市辖区"},{areaId:"460105",area:"秀英区"},{areaId:"460106",area:"龙华区"},{areaId:"460107",area:"琼山区"},{areaId:"460108",area:"美兰区"}]},{cityId:"460200",city:"三亚市",areas:[{areaId:"460201",area:"市辖区"}]},{cityId:"469000",city:"省直辖县级行政单位",areas:[{areaId:"469001",area:"五指山市"},{areaId:"469002",area:"琼海市"},{areaId:"469003",area:"儋州市"},{areaId:"469005",area:"文昌市"},{areaId:"469006",area:"万宁市"},{areaId:"469007",area:"东方市"},{areaId:"469025",area:"定安县"},{areaId:"469026",area:"屯昌县"},{areaId:"469027",area:"澄迈县"},{areaId:"469028",area:"临高县"},{areaId:"469030",area:"白沙黎族自治县"},{areaId:"469031",area:"昌江黎族自治县"},{areaId:"469033",area:"乐东黎族自治县"},{areaId:"469034",area:"陵水黎族自治县"},{areaId:"469035",area:"保亭黎族苗族自治县"},{areaId:"469036",area:"琼中黎族苗族自治县"},{areaId:"469037",area:"西沙群岛"},{areaId:"469038",area:"南沙群岛"},{areaId:"469039",area:"中沙群岛的岛礁及其海域"}]}]},{provinceId:"500000",province:"重庆市",citys:[{cityId:"500100",city:"市辖区",areas:[{areaId:"500101",area:"万州区"},{areaId:"500102",area:"涪陵区"},{areaId:"500103",area:"渝中区"},{areaId:"500104",area:"大渡口区"},{areaId:"500105",area:"江北区"},{areaId:"500106",area:"沙坪坝区"},{areaId:"500107",area:"九龙坡区"},{areaId:"500108",area:"南岸区"},{areaId:"500109",area:"北碚区"},{areaId:"500110",area:"万盛区"},{areaId:"500111",area:"双桥区"},{areaId:"500112",area:"渝北区"},{areaId:"500113",area:"巴南区"},{areaId:"500114",area:"黔江区"},{areaId:"500115",area:"长寿区"}]},{cityId:"500200",city:"县",areas:[{areaId:"500222",area:"綦江县"},{areaId:"500223",area:"潼南县"},{areaId:"500224",area:"铜梁县"},{areaId:"500225",area:"大足县"},{areaId:"500226",area:"荣昌县"},{areaId:"500227",area:"璧山县"},{areaId:"500228",area:"梁平县"},{areaId:"500229",area:"城口县"},{areaId:"500230",area:"丰都县"},{areaId:"500231",area:"垫江县"},{areaId:"500232",area:"武隆县"},{areaId:"500233",area:"忠　县"},{areaId:"500234",area:"开　县"},{areaId:"500235",area:"云阳县"},{areaId:"500236",area:"奉节县"},{areaId:"500237",area:"巫山县"},{areaId:"500238",area:"巫溪县"},{areaId:"500240",area:"石柱土家族自治县"},{areaId:"500241",area:"秀山土家族苗族自治县"},{areaId:"500242",area:"酉阳土家族苗族自治县"},{areaId:"500243",area:"彭水苗族土家族自治县"}]},{cityId:"500300",city:"市",areas:[{areaId:"500381",area:"江津市"},{areaId:"500382",area:"合川市"},{areaId:"500383",area:"永川市"},{areaId:"500384",area:"南川市"}]}]},{provinceId:"510000",province:"四川省",citys:[{cityId:"510100",city:"成都市",areas:[{areaId:"510101",area:"市辖区"},{areaId:"510104",area:"锦江区"},{areaId:"510105",area:"青羊区"},{areaId:"510106",area:"金牛区"},{areaId:"510107",area:"武侯区"},{areaId:"510108",area:"成华区"},{areaId:"510112",area:"龙泉驿区"},{areaId:"510113",area:"青白江区"},{areaId:"510114",area:"新都区"},{areaId:"510115",area:"温江区"},{areaId:"510121",area:"金堂县"},{areaId:"510122",area:"双流县"},{areaId:"510124",area:"郫　县"},{areaId:"510129",area:"大邑县"},{areaId:"510131",area:"蒲江县"},{areaId:"510132",area:"新津县"},{areaId:"510181",area:"都江堰市"},{areaId:"510182",area:"彭州市"},{areaId:"510183",area:"邛崃市"},{areaId:"510184",area:"崇州市"}]},{cityId:"510300",city:"自贡市",areas:[{areaId:"510301",area:"市辖区"},{areaId:"510302",area:"自流井区"},{areaId:"510303",area:"贡井区"},{areaId:"510304",area:"大安区"},{areaId:"510311",area:"沿滩区"},{areaId:"510321",area:"荣　县"},{areaId:"510322",area:"富顺县"}]},{cityId:"510400",city:"攀枝花市",areas:[{areaId:"510401",area:"市辖区"},{areaId:"510402",area:"东　区"},{areaId:"510403",area:"西　区"},{areaId:"510411",area:"仁和区"},{areaId:"510421",area:"米易县"},{areaId:"510422",area:"盐边县"}]},{cityId:"510500",city:"泸州市",areas:[{areaId:"510501",area:"市辖区"},{areaId:"510502",area:"江阳区"},{areaId:"510503",area:"纳溪区"},{areaId:"510504",area:"龙马潭区"},{areaId:"510521",area:"泸　县"},{areaId:"510522",area:"合江县"},{areaId:"510524",area:"叙永县"},{areaId:"510525",area:"古蔺县"}]},{cityId:"510600",city:"德阳市",areas:[{areaId:"510601",area:"市辖区"},{areaId:"510603",area:"旌阳区"},{areaId:"510623",area:"中江县"},{areaId:"510626",area:"罗江县"},{areaId:"510681",area:"广汉市"},{areaId:"510682",area:"什邡市"},{areaId:"510683",area:"绵竹市"}]},{cityId:"510700",city:"绵阳市",areas:[{areaId:"510701",area:"市辖区"},{areaId:"510703",area:"涪城区"},{areaId:"510704",area:"游仙区"},{areaId:"510722",area:"三台县"},{areaId:"510723",area:"盐亭县"},{areaId:"510724",area:"安　县"},{areaId:"510725",area:"梓潼县"},{areaId:"510726",area:"北川羌族自治县"},{areaId:"510727",area:"平武县"},{areaId:"510781",area:"江油市"}]},{cityId:"510800",city:"广元市",areas:[{areaId:"510801",area:"市辖区"},{areaId:"510802",area:"市中区"},{areaId:"510811",area:"元坝区"},{areaId:"510812",area:"朝天区"},{areaId:"510821",area:"旺苍县"},{areaId:"510822",area:"青川县"},{areaId:"510823",area:"剑阁县"},{areaId:"510824",area:"苍溪县"}]},{cityId:"510900",city:"遂宁市",areas:[{areaId:"510901",area:"市辖区"},{areaId:"510903",area:"船山区"},{areaId:"510904",area:"安居区"},{areaId:"510921",area:"蓬溪县"},{areaId:"510922",area:"射洪县"},{areaId:"510923",area:"大英县"}]},{cityId:"511000",city:"内江市",areas:[{areaId:"511001",area:"市辖区"},{areaId:"511002",area:"市中区"},{areaId:"511011",area:"东兴区"},{areaId:"511024",area:"威远县"},{areaId:"511025",area:"资中县"},{areaId:"511028",area:"隆昌县"}]},{cityId:"511100",city:"乐山市",areas:[{areaId:"511101",area:"市辖区"},{areaId:"511102",area:"市中区"},{areaId:"511111",area:"沙湾区"},{areaId:"511112",area:"五通桥区"},{areaId:"511113",area:"金口河区"},{areaId:"511123",area:"犍为县"},{areaId:"511124",area:"井研县"},{areaId:"511126",area:"夹江县"},{areaId:"511129",area:"沐川县"},{areaId:"511132",area:"峨边彝族自治县"},{areaId:"511133",area:"马边彝族自治县"},{areaId:"511181",area:"峨眉山市"}]},{cityId:"511300",city:"南充市",areas:[{areaId:"511301",area:"市辖区"},{areaId:"511302",area:"顺庆区"},{areaId:"511303",area:"高坪区"},{areaId:"511304",area:"嘉陵区"},{areaId:"511321",area:"南部县"},{areaId:"511322",area:"营山县"},{areaId:"511323",area:"蓬安县"},{areaId:"511324",area:"仪陇县"},{areaId:"511325",area:"西充县"},{areaId:"511381",area:"阆中市"}]},{cityId:"511400",city:"眉山市",areas:[{areaId:"511401",area:"市辖区"},{areaId:"511402",area:"东坡区"},{areaId:"511421",area:"仁寿县"},{areaId:"511422",area:"彭山县"},{areaId:"511423",area:"洪雅县"},{areaId:"511424",area:"丹棱县"},{areaId:"511425",area:"青神县"}]},{cityId:"511500",city:"宜宾市",areas:[{areaId:"511501",area:"市辖区"},{areaId:"511502",area:"翠屏区"},{areaId:"511521",area:"宜宾县"},{areaId:"511522",area:"南溪县"},{areaId:"511523",area:"江安县"},{areaId:"511524",area:"长宁县"},{areaId:"511525",area:"高　县"},{areaId:"511526",area:"珙　县"},{areaId:"511527",area:"筠连县"},{areaId:"511528",area:"兴文县"},{areaId:"511529",area:"屏山县"}]},{cityId:"511600",city:"广安市",areas:[{areaId:"511601",area:"市辖区"},{areaId:"511602",area:"广安区"},{areaId:"511621",area:"岳池县"},{areaId:"511622",area:"武胜县"},{areaId:"511623",area:"邻水县"},{areaId:"511681",area:"华莹市"}]},{cityId:"511700",city:"达州市",areas:[{areaId:"511701",area:"市辖区"},{areaId:"511702",area:"通川区"},{areaId:"511721",area:"达　县"},{areaId:"511722",area:"宣汉县"},{areaId:"511723",area:"开江县"},{areaId:"511724",area:"大竹县"},{areaId:"511725",area:"渠　县"},{areaId:"511781",area:"万源市"}]},{cityId:"511800",city:"雅安市",areas:[{areaId:"511801",area:"市辖区"},{areaId:"511802",area:"雨城区"},{areaId:"511821",area:"名山县"},{areaId:"511822",area:"荥经县"},{areaId:"511823",area:"汉源县"},{areaId:"511824",area:"石棉县"},{areaId:"511825",area:"天全县"},{areaId:"511826",area:"芦山县"},{areaId:"511827",area:"宝兴县"}]},{cityId:"511900",city:"巴中市",areas:[{areaId:"511901",area:"市辖区"},{areaId:"511902",area:"巴州区"},{areaId:"511921",area:"通江县"},{areaId:"511922",area:"南江县"},{areaId:"511923",area:"平昌县"}]},{cityId:"512000",city:"资阳市",areas:[{areaId:"512001",area:"市辖区"},{areaId:"512002",area:"雁江区"},{areaId:"512021",area:"安岳县"},{areaId:"512022",area:"乐至县"},{areaId:"512081",area:"简阳市"}]},{cityId:"513200",city:"阿坝藏族羌族自治州",areas:[{areaId:"513221",area:"汶川县"},{areaId:"513222",area:"理　县"},{areaId:"513223",area:"茂　县"},{areaId:"513224",area:"松潘县"},{areaId:"513225",area:"九寨沟县"},{areaId:"513226",area:"金川县"},{areaId:"513227",area:"小金县"},{areaId:"513228",area:"黑水县"},{areaId:"513229",area:"马尔康县"},{areaId:"513230",area:"壤塘县"},{areaId:"513231",area:"阿坝县"},{areaId:"513232",area:"若尔盖县"},{areaId:"513233",area:"红原县"}]},{cityId:"513300",city:"甘孜藏族自治州",areas:[{areaId:"513321",area:"康定县"},{areaId:"513322",area:"泸定县"},{areaId:"513323",area:"丹巴县"},{areaId:"513324",area:"九龙县"},{areaId:"513325",area:"雅江县"},{areaId:"513326",area:"道孚县"},{areaId:"513327",area:"炉霍县"},{areaId:"513328",area:"甘孜县"},{areaId:"513329",area:"新龙县"},{areaId:"513330",area:"德格县"},{areaId:"513331",area:"白玉县"},{areaId:"513332",area:"石渠县"},{areaId:"513333",area:"色达县"},{areaId:"513334",area:"理塘县"},{areaId:"513335",area:"巴塘县"},{areaId:"513336",area:"乡城县"},{areaId:"513337",area:"稻城县"},{areaId:"513338",area:"得荣县"}]},{cityId:"513400",city:"凉山彝族自治州",areas:[{areaId:"513401",area:"西昌市"},{areaId:"513422",area:"木里藏族自治县"},{areaId:"513423",area:"盐源县"},{areaId:"513424",area:"德昌县"},{areaId:"513425",area:"会理县"},{areaId:"513426",area:"会东县"},{areaId:"513427",area:"宁南县"},{areaId:"513428",area:"普格县"},{areaId:"513429",area:"布拖县"},{areaId:"513430",area:"金阳县"},{areaId:"513431",area:"昭觉县"},{areaId:"513432",area:"喜德县"},{areaId:"513433",area:"冕宁县"},{areaId:"513434",area:"越西县"},{areaId:"513435",area:"甘洛县"},{areaId:"513436",area:"美姑县"},{areaId:"513437",area:"雷波县"}]}]},{provinceId:"520000",province:"贵州省",citys:[{cityId:"520100",city:"贵阳市",areas:[{areaId:"520101",area:"市辖区"},{areaId:"520102",area:"南明区"},{areaId:"520103",area:"云岩区"},{areaId:"520111",area:"花溪区"},{areaId:"520112",area:"乌当区"},{areaId:"520113",area:"白云区"},{areaId:"520114",area:"小河区"},{areaId:"520121",area:"开阳县"},{areaId:"520122",area:"息烽县"},{areaId:"520123",area:"修文县"},{areaId:"520181",area:"清镇市"}]},{cityId:"520200",city:"六盘水市",areas:[{areaId:"520201",area:"钟山区"},{areaId:"520203",area:"六枝特区"},{areaId:"520221",area:"水城县"},{areaId:"520222",area:"盘　县"}]},{cityId:"520300",city:"遵义市",areas:[{areaId:"520301",area:"市辖区"},{areaId:"520302",area:"红花岗区"},{areaId:"520303",area:"汇川区"},{areaId:"520321",area:"遵义县"},{areaId:"520322",area:"桐梓县"},{areaId:"520323",area:"绥阳县"},{areaId:"520324",area:"正安县"},{areaId:"520325",area:"道真仡佬族苗族自治县"},{areaId:"520326",area:"务川仡佬族苗族自治县"},{areaId:"520327",area:"凤冈县"},{areaId:"520328",area:"湄潭县"},{areaId:"520329",area:"余庆县"},{areaId:"520330",area:"习水县"},{areaId:"520381",area:"赤水市"},{areaId:"520382",area:"仁怀市"}]},{cityId:"520400",city:"安顺市",areas:[{areaId:"520401",area:"市辖区"},{areaId:"520402",area:"西秀区"},{areaId:"520421",area:"平坝县"},{areaId:"520422",area:"普定县"},{areaId:"520423",area:"镇宁布依族苗族自治县"},{areaId:"520424",area:"关岭布依族苗族自治县"},{areaId:"520425",area:"紫云苗族布依族自治县"}]},{cityId:"522200",city:"铜仁地区",areas:[{areaId:"522201",area:"铜仁市"},{areaId:"522222",area:"江口县"},{areaId:"522223",area:"玉屏侗族自治县"},{areaId:"522224",area:"石阡县"},{areaId:"522225",area:"思南县"},{areaId:"522226",area:"印江土家族苗族自治县"},{areaId:"522227",area:"德江县"},{areaId:"522228",area:"沿河土家族自治县"},{areaId:"522229",area:"松桃苗族自治县"},{areaId:"522230",area:"万山特区"}]},{cityId:"522300",city:"黔西南布依族苗族自治州",areas:[{areaId:"522301",area:"兴义市"},{areaId:"522322",area:"兴仁县"},{areaId:"522323",area:"普安县"},{areaId:"522324",area:"晴隆县"},{areaId:"522325",area:"贞丰县"},{areaId:"522326",area:"望谟县"},{areaId:"522327",area:"册亨县"},{areaId:"522328",area:"安龙县"}]},{cityId:"522400",city:"毕节地区",areas:[{areaId:"522401",area:"毕节市"},{areaId:"522422",area:"大方县"},{areaId:"522423",area:"黔西县"},{areaId:"522424",area:"金沙县"},{areaId:"522425",area:"织金县"},{areaId:"522426",area:"纳雍县"},{areaId:"522427",area:"威宁彝族回族苗族自治县"},{areaId:"522428",area:"赫章县"}]},{cityId:"522600",city:"黔东南苗族侗族自治州",areas:[{areaId:"522601",area:"凯里市"},{areaId:"522622",area:"黄平县"},{areaId:"522623",area:"施秉县"},{areaId:"522624",area:"三穗县"},{areaId:"522625",area:"镇远县"},{areaId:"522626",area:"岑巩县"},{areaId:"522627",area:"天柱县"},{areaId:"522628",area:"锦屏县"},{areaId:"522629",area:"剑河县"},{areaId:"522630",area:"台江县"},{areaId:"522631",area:"黎平县"},{areaId:"522632",area:"榕江县"},{areaId:"522633",area:"从江县"},{areaId:"522634",area:"雷山县"},{areaId:"522635",area:"麻江县"},{areaId:"522636",area:"丹寨县"}]},{cityId:"522700",city:"黔南布依族苗族自治州",areas:[{areaId:"522701",area:"都匀市"},{areaId:"522702",area:"福泉市"},{areaId:"522722",area:"荔波县"},{areaId:"522723",area:"贵定县"},{areaId:"522725",area:"瓮安县"},{areaId:"522726",area:"独山县"},{areaId:"522727",area:"平塘县"},{areaId:"522728",area:"罗甸县"},{areaId:"522729",area:"长顺县"},{areaId:"522730",area:"龙里县"},{areaId:"522731",area:"惠水县"},{areaId:"522732",area:"三都水族自治县"}]}]},{provinceId:"530000",province:"云南省",citys:[{cityId:"530100",city:"昆明市",areas:[{areaId:"530101",area:"市辖区"},{areaId:"530102",area:"五华区"},{areaId:"530103",area:"盘龙区"},{areaId:"530111",area:"官渡区"},{areaId:"530112",area:"西山区"},{areaId:"530113",area:"东川区"},{areaId:"530121",area:"呈贡县"},{areaId:"530122",area:"晋宁县"},{areaId:"530124",area:"富民县"},{areaId:"530125",area:"宜良县"},{areaId:"530126",area:"石林彝族自治县"},{areaId:"530127",area:"嵩明县"},{areaId:"530128",area:"禄劝彝族苗族自治县"},{areaId:"530129",area:"寻甸回族彝族自治县"},{areaId:"530181",area:"安宁市"}]},{cityId:"530300",city:"曲靖市",areas:[{areaId:"530301",area:"市辖区"},{areaId:"530302",area:"麒麟区"},{areaId:"530321",area:"马龙县"},{areaId:"530322",area:"陆良县"},{areaId:"530323",area:"师宗县"},{areaId:"530324",area:"罗平县"},{areaId:"530325",area:"富源县"},{areaId:"530326",area:"会泽县"},{areaId:"530328",area:"沾益县"},{areaId:"530381",area:"宣威市"}]},{cityId:"530400",city:"玉溪市",areas:[{areaId:"530401",area:"市辖区"},{areaId:"530402",area:"红塔区"},{areaId:"530421",area:"江川县"},{areaId:"530422",area:"澄江县"},{areaId:"530423",area:"通海县"},{areaId:"530424",area:"华宁县"},{areaId:"530425",area:"易门县"},{areaId:"530426",area:"峨山彝族自治县"},{areaId:"530427",area:"新平彝族傣族自治县"},{areaId:"530428",area:"元江哈尼族彝族傣族自治县"}]},{cityId:"530500",city:"保山市",areas:[{areaId:"530501",area:"市辖区"},{areaId:"530502",area:"隆阳区"},{areaId:"530521",area:"施甸县"},{areaId:"530522",area:"腾冲县"},{areaId:"530523",area:"龙陵县"},{areaId:"530524",area:"昌宁县"}]},{cityId:"530600",city:"昭通市",areas:[{areaId:"530601",area:"市辖区"},{areaId:"530602",area:"昭阳区"},{areaId:"530621",area:"鲁甸县"},{areaId:"530622",area:"巧家县"},{areaId:"530623",area:"盐津县"},{areaId:"530624",area:"大关县"},{areaId:"530625",area:"永善县"},{areaId:"530626",area:"绥江县"},{areaId:"530627",area:"镇雄县"},{areaId:"530628",area:"彝良县"},{areaId:"530629",area:"威信县"},{areaId:"530630",area:"水富县"}]},{cityId:"530700",city:"丽江市",areas:[{areaId:"530701",area:"市辖区"},{areaId:"530702",area:"古城区"},{areaId:"530721",area:"玉龙纳西族自治县"},{areaId:"530722",area:"永胜县"},{areaId:"530723",area:"华坪县"},{areaId:"530724",area:"宁蒗彝族自治县"}]},{cityId:"530800",city:"思茅市",areas:[{areaId:"530801",area:"市辖区"},{areaId:"530802",area:"翠云区"},{areaId:"530821",area:"普洱哈尼族彝族自治县"},{areaId:"530822",area:"墨江哈尼族自治县"},{areaId:"530823",area:"景东彝族自治县"},{areaId:"530824",area:"景谷傣族彝族自治县"},{areaId:"530825",area:"镇沅彝族哈尼族拉祜族自治县"},{areaId:"530826",area:"江城哈尼族彝族自治县"},{areaId:"530827",area:"孟连傣族拉祜族佤族自治县"},{areaId:"530828",area:"澜沧拉祜族自治县"},{areaId:"530829",area:"西盟佤族自治县"}]},{cityId:"530900",city:"临沧市",areas:[{areaId:"530901",area:"市辖区"},{areaId:"530902",area:"临翔区"},{areaId:"530921",area:"凤庆县"},{areaId:"530922",area:"云　县"},{areaId:"530923",area:"永德县"},{areaId:"530924",area:"镇康县"},{areaId:"530925",area:"双江拉祜族佤族布朗族傣族自治县"},{areaId:"530926",area:"耿马傣族佤族自治县"},{areaId:"530927",area:"沧源佤族自治县"}]},{cityId:"532300",city:"楚雄彝族自治州",areas:[{areaId:"532301",area:"楚雄市"},{areaId:"532322",area:"双柏县"},{areaId:"532323",area:"牟定县"},{areaId:"532324",area:"南华县"},{areaId:"532325",area:"姚安县"},{areaId:"532326",area:"大姚县"},{areaId:"532327",area:"永仁县"},{areaId:"532328",area:"元谋县"},{areaId:"532329",area:"武定县"},{areaId:"532331",area:"禄丰县"}]},{cityId:"532500",city:"红河哈尼族彝族自治州",areas:[{areaId:"532501",area:"个旧市"},{areaId:"532502",area:"开远市"},{areaId:"532522",area:"蒙自县"},{areaId:"532523",area:"屏边苗族自治县"},{areaId:"532524",area:"建水县"},{areaId:"532525",area:"石屏县"},{areaId:"532526",area:"弥勒县"},{areaId:"532527",area:"泸西县"},{areaId:"532528",area:"元阳县"},{areaId:"532529",area:"红河县"},{areaId:"532530",area:"金平苗族瑶族傣族自治县"},{areaId:"532531",area:"绿春县"},{areaId:"532532",area:"河口瑶族自治县"}]},{cityId:"532600",city:"文山壮族苗族自治州",areas:[{areaId:"532621",area:"文山县"},{areaId:"532622",area:"砚山县"},{areaId:"532623",area:"西畴县"},{areaId:"532624",area:"麻栗坡县"},{areaId:"532625",area:"马关县"},{areaId:"532626",area:"丘北县"},{areaId:"532627",area:"广南县"},{areaId:"532628",area:"富宁县"}]},{cityId:"532800",city:"西双版纳傣族自治州",areas:[{areaId:"532801",area:"景洪市"},{areaId:"532822",area:"勐海县"},{areaId:"532823",area:"勐腊县"}]},{cityId:"532900",city:"大理白族自治州",areas:[{areaId:"532901",area:"大理市"},{areaId:"532922",area:"漾濞彝族自治县"},{areaId:"532923",area:"祥云县"},{areaId:"532924",area:"宾川县"},{areaId:"532925",area:"弥渡县"},{areaId:"532926",area:"南涧彝族自治县"},{areaId:"532927",area:"巍山彝族回族自治县"},{areaId:"532928",area:"永平县"},{areaId:"532929",area:"云龙县"},{areaId:"532930",area:"洱源县"},{areaId:"532931",area:"剑川县"},{areaId:"532932",area:"鹤庆县"}]},{cityId:"533100",city:"德宏傣族景颇族自治州",areas:[{areaId:"533102",area:"瑞丽市"},{areaId:"533103",area:"潞西市"},{areaId:"533122",area:"梁河县"},{areaId:"533123",area:"盈江县"},{areaId:"533124",area:"陇川县"}]},{cityId:"533300",city:"怒江傈僳族自治州",areas:[{areaId:"533321",area:"泸水县"},{areaId:"533323",area:"福贡县"},{areaId:"533324",area:"贡山独龙族怒族自治县"},{areaId:"533325",area:"兰坪白族普米族自治县"}]},{cityId:"533400",city:"迪庆藏族自治州",areas:[{areaId:"533421",area:"香格里拉县"},{areaId:"533422",area:"德钦县"},{areaId:"533423",area:"维西傈僳族自治县"}]}]},{provinceId:"540000",province:"西藏自治区",citys:[{cityId:"540100",city:"拉萨市",areas:[{areaId:"540101",area:"市辖区"},{areaId:"540102",area:"城关区"},{areaId:"540121",area:"林周县"},{areaId:"540122",area:"当雄县"},{areaId:"540123",area:"尼木县"},{areaId:"540124",area:"曲水县"},{areaId:"540125",area:"堆龙德庆县"},{areaId:"540126",area:"达孜县"},{areaId:"540127",area:"墨竹工卡县"}]},{cityId:"542100",city:"昌都地区",areas:[{areaId:"542121",area:"昌都县"},{areaId:"542122",area:"江达县"},{areaId:"542123",area:"贡觉县"},{areaId:"542124",area:"类乌齐县"},{areaId:"542125",area:"丁青县"},{areaId:"542126",area:"察雅县"},{areaId:"542127",area:"八宿县"},{areaId:"542128",area:"左贡县"},{areaId:"542129",area:"芒康县"},{areaId:"542132",area:"洛隆县"},{areaId:"542133",area:"边坝县"}]},{cityId:"542200",city:"山南地区",areas:[{areaId:"542221",area:"乃东县"},{areaId:"542222",area:"扎囊县"},{areaId:"542223",area:"贡嘎县"},{areaId:"542224",area:"桑日县"},{areaId:"542225",area:"琼结县"},{areaId:"542226",area:"曲松县"},{areaId:"542227",area:"措美县"},{areaId:"542228",area:"洛扎县"},{areaId:"542229",area:"加查县"},{areaId:"542231",area:"隆子县"},{areaId:"542232",area:"错那县"},{areaId:"542233",area:"浪卡子县"}]},{cityId:"542300",city:"日喀则地区",areas:[{areaId:"542301",area:"日喀则市"},{areaId:"542322",area:"南木林县"},{areaId:"542323",area:"江孜县"},{areaId:"542324",area:"定日县"},{areaId:"542325",area:"萨迦县"},{areaId:"542326",area:"拉孜县"},{areaId:"542327",area:"昂仁县"},{areaId:"542328",area:"谢通门县"},{areaId:"542329",area:"白朗县"},{areaId:"542330",area:"仁布县"},{areaId:"542331",area:"康马县"},{areaId:"542332",area:"定结县"},{areaId:"542333",area:"仲巴县"},{areaId:"542334",area:"亚东县"},{areaId:"542335",area:"吉隆县"},{areaId:"542336",area:"聂拉木县"},{areaId:"542337",area:"萨嘎县"},{areaId:"542338",area:"岗巴县"}]},{cityId:"542400",city:"那曲地区",areas:[{areaId:"542421",area:"那曲县"},{areaId:"542422",area:"嘉黎县"},{areaId:"542423",area:"比如县"},{areaId:"542424",area:"聂荣县"},{areaId:"542425",area:"安多县"},{areaId:"542426",area:"申扎县"},{areaId:"542427",area:"索　县"},{areaId:"542428",area:"班戈县"},{areaId:"542429",area:"巴青县"},{areaId:"542430",area:"尼玛县"}]},{cityId:"542500",city:"阿里地区",areas:[{areaId:"542521",area:"普兰县"},{areaId:"542522",area:"札达县"},{areaId:"542523",area:"噶尔县"},{areaId:"542524",area:"日土县"},{areaId:"542525",area:"革吉县"},{areaId:"542526",area:"改则县"},{areaId:"542527",area:"措勤县"}]},{cityId:"542600",city:"林芝地区",areas:[{areaId:"542621",area:"林芝县"},{areaId:"542622",area:"工布江达县"},{areaId:"542623",area:"米林县"},{areaId:"542624",area:"墨脱县"},{areaId:"542625",area:"波密县"},{areaId:"542626",area:"察隅县"},{areaId:"542627",area:"朗　县"}]}]},{provinceId:"610000",province:"陕西省",citys:[{cityId:"610100",city:"西安市",areas:[{areaId:"610101",area:"市辖区"},{areaId:"610102",area:"新城区"},{areaId:"610103",area:"碑林区"},{areaId:"610104",area:"莲湖区"},{areaId:"610111",area:"灞桥区"},{areaId:"610112",area:"未央区"},{areaId:"610113",area:"雁塔区"},{areaId:"610114",area:"阎良区"},{areaId:"610115",area:"临潼区"},{areaId:"610116",area:"长安区"},{areaId:"610122",area:"蓝田县"},{areaId:"610124",area:"周至县"},{areaId:"610125",area:"户　县"},{areaId:"610126",area:"高陵县"}]},{cityId:"610200",city:"铜川市",areas:[{areaId:"610201",area:"市辖区"},{areaId:"610202",area:"王益区"},{areaId:"610203",area:"印台区"},{areaId:"610204",area:"耀州区"},{areaId:"610222",area:"宜君县"}]},{cityId:"610300",city:"宝鸡市",areas:[{areaId:"610301",area:"市辖区"},{areaId:"610302",area:"渭滨区"},{areaId:"610303",area:"金台区"},{areaId:"610304",area:"陈仓区"},{areaId:"610322",area:"凤翔县"},{areaId:"610323",area:"岐山县"},{areaId:"610324",area:"扶风县"},{areaId:"610326",area:"眉　县"},{areaId:"610327",area:"陇　县"},{areaId:"610328",area:"千阳县"},{areaId:"610329",area:"麟游县"},{areaId:"610330",area:"凤　县"},{areaId:"610331",area:"太白县"}]},{cityId:"610400",city:"咸阳市",areas:[{areaId:"610401",area:"市辖区"},{areaId:"610402",area:"秦都区"},{areaId:"610403",area:"杨凌区"},{areaId:"610404",area:"渭城区"},{areaId:"610422",area:"三原县"},{areaId:"610423",area:"泾阳县"},{areaId:"610424",area:"乾　县"},{areaId:"610425",area:"礼泉县"},{areaId:"610426",area:"永寿县"},{areaId:"610427",area:"彬　县"},{areaId:"610428",area:"长武县"},{areaId:"610429",area:"旬邑县"},{areaId:"610430",area:"淳化县"},{areaId:"610431",area:"武功县"},{areaId:"610481",area:"兴平市"}]},{cityId:"610500",city:"渭南市",areas:[{areaId:"610501",area:"市辖区"},{areaId:"610502",area:"临渭区"},{areaId:"610521",area:"华　县"},{areaId:"610522",area:"潼关县"},{areaId:"610523",area:"大荔县"},{areaId:"610524",area:"合阳县"},{areaId:"610525",area:"澄城县"},{areaId:"610526",area:"蒲城县"},{areaId:"610527",area:"白水县"},{areaId:"610528",area:"富平县"},{areaId:"610581",area:"韩城市"},{areaId:"610582",area:"华阴市"}]},{cityId:"610600",city:"延安市",areas:[{areaId:"610601",area:"市辖区"},{areaId:"610602",area:"宝塔区"},{areaId:"610621",area:"延长县"},{areaId:"610622",area:"延川县"},{areaId:"610623",area:"子长县"},{areaId:"610624",area:"安塞县"},{areaId:"610625",area:"志丹县"},{areaId:"610626",area:"吴旗县"},{areaId:"610627",area:"甘泉县"},{areaId:"610628",area:"富　县"},{areaId:"610629",area:"洛川县"},{areaId:"610630",area:"宜川县"},{areaId:"610631",area:"黄龙县"},{areaId:"610632",area:"黄陵县"}]},{cityId:"610700",city:"汉中市",areas:[{areaId:"610701",area:"市辖区"},{areaId:"610702",area:"汉台区"},{areaId:"610721",area:"南郑县"},{areaId:"610722",area:"城固县"},{areaId:"610723",area:"洋　县"},{areaId:"610724",area:"西乡县"},{areaId:"610725",area:"勉　县"},{areaId:"610726",area:"宁强县"},{areaId:"610727",area:"略阳县"},{areaId:"610728",area:"镇巴县"},{areaId:"610729",area:"留坝县"},{areaId:"610730",area:"佛坪县"}]},{cityId:"610800",city:"榆林市",areas:[{areaId:"610801",area:"市辖区"},{areaId:"610802",area:"榆阳区"},{areaId:"610821",area:"神木县"},{areaId:"610822",area:"府谷县"},{areaId:"610823",area:"横山县"},{areaId:"610824",area:"靖边县"},{areaId:"610825",area:"定边县"},{areaId:"610826",area:"绥德县"},{areaId:"610827",area:"米脂县"},{areaId:"610828",area:"佳　县"},{areaId:"610829",area:"吴堡县"},{areaId:"610830",area:"清涧县"},{areaId:"610831",area:"子洲县"}]},{cityId:"610900",city:"安康市",areas:[{areaId:"610901",area:"市辖区"},{areaId:"610902",area:"汉滨区"},{areaId:"610921",area:"汉阴县"},{areaId:"610922",area:"石泉县"},{areaId:"610923",area:"宁陕县"},{areaId:"610924",area:"紫阳县"},{areaId:"610925",area:"岚皋县"},{areaId:"610926",area:"平利县"},{areaId:"610927",area:"镇坪县"},{areaId:"610928",area:"旬阳县"},{areaId:"610929",area:"白河县"}]},{cityId:"611000",city:"商洛市",areas:[{areaId:"611001",area:"市辖区"},{areaId:"611002",area:"商州区"},{areaId:"611021",area:"洛南县"},{areaId:"611022",area:"丹凤县"},{areaId:"611023",area:"商南县"},{areaId:"611024",area:"山阳县"},{areaId:"611025",area:"镇安县"},{areaId:"611026",area:"柞水县"}]}]},{provinceId:"620000",province:"甘肃省",citys:[{cityId:"620100",city:"兰州市",areas:[{areaId:"620101",area:"市辖区"},{areaId:"620102",area:"城关区"},{areaId:"620103",area:"七里河区"},{areaId:"620104",area:"西固区"},{areaId:"620105",area:"安宁区"},{areaId:"620111",area:"红古区"},{areaId:"620121",area:"永登县"},{areaId:"620122",area:"皋兰县"},{areaId:"620123",area:"榆中县"}]},{cityId:"620200",city:"嘉峪关市",areas:[{areaId:"620201",area:"市辖区"}]},{cityId:"620300",city:"金昌市",areas:[{areaId:"620301",area:"市辖区"},{areaId:"620302",area:"金川区"},{areaId:"620321",area:"永昌县"}]},{cityId:"620400",city:"白银市",areas:[{areaId:"620401",area:"市辖区"},{areaId:"620402",area:"白银区"},{areaId:"620403",area:"平川区"},{areaId:"620421",area:"靖远县"},{areaId:"620422",area:"会宁县"},{areaId:"620423",area:"景泰县"}]},{cityId:"620500",city:"天水市",areas:[{areaId:"620501",area:"市辖区"},{areaId:"620502",area:"秦城区"},{areaId:"620503",area:"北道区"},{areaId:"620521",area:"清水县"},{areaId:"620522",area:"秦安县"},{areaId:"620523",area:"甘谷县"},{areaId:"620524",area:"武山县"},{areaId:"620525",area:"张家川回族自治县"}]},{cityId:"620600",city:"武威市",areas:[{areaId:"620601",area:"市辖区"},{areaId:"620602",area:"凉州区"},{areaId:"620621",area:"民勤县"},{areaId:"620622",area:"古浪县"},{areaId:"620623",area:"天祝藏族自治县"}]},{cityId:"620700",city:"张掖市",areas:[{areaId:"620701",area:"市辖区"},{areaId:"620702",area:"甘州区"},{areaId:"620721",area:"肃南裕固族自治县"},{areaId:"620722",area:"民乐县"},{areaId:"620723",area:"临泽县"},{areaId:"620724",area:"高台县"},{areaId:"620725",area:"山丹县"}]},{cityId:"620800",city:"平凉市",areas:[{areaId:"620801",area:"市辖区"},{areaId:"620802",area:"崆峒区"},{areaId:"620821",area:"泾川县"},{areaId:"620822",area:"灵台县"},{areaId:"620823",area:"崇信县"},{areaId:"620824",area:"华亭县"},{areaId:"620825",area:"庄浪县"},{areaId:"620826",area:"静宁县"}]},{cityId:"620900",city:"酒泉市",areas:[{areaId:"620901",area:"市辖区"},{areaId:"620902",area:"肃州区"},{areaId:"620921",area:"金塔县"},{areaId:"620922",area:"安西县"},{areaId:"620923",area:"肃北蒙古族自治县"},{areaId:"620924",area:"阿克塞哈萨克族自治县"},{areaId:"620981",area:"玉门市"},{areaId:"620982",area:"敦煌市"}]},{cityId:"621000",city:"庆阳市",areas:[{areaId:"621001",area:"市辖区"},{areaId:"621002",area:"西峰区"},{areaId:"621021",area:"庆城县"},{areaId:"621022",area:"环　县"},{areaId:"621023",area:"华池县"},{areaId:"621024",area:"合水县"},{areaId:"621025",area:"正宁县"},{areaId:"621026",area:"宁　县"},{areaId:"621027",area:"镇原县"}]},{cityId:"621100",city:"定西市",areas:[{areaId:"621101",area:"市辖区"},{areaId:"621102",area:"安定区"},{areaId:"621121",area:"通渭县"},{areaId:"621122",area:"陇西县"},{areaId:"621123",area:"渭源县"},{areaId:"621124",area:"临洮县"},{areaId:"621125",area:"漳　县"},{areaId:"621126",area:"岷　县"}]},{cityId:"621200",city:"陇南市",areas:[{areaId:"621201",area:"市辖区"},{areaId:"621202",area:"武都区"},{areaId:"621221",area:"成　县"},{areaId:"621222",area:"文　县"},{areaId:"621223",area:"宕昌县"},{areaId:"621224",area:"康　县"},{areaId:"621225",area:"西和县"},{areaId:"621226",area:"礼　县"},{areaId:"621227",area:"徽　县"},{areaId:"621228",area:"两当县"}]},{cityId:"622900",city:"临夏回族自治州",areas:[{areaId:"622901",area:"临夏市"},{areaId:"622921",area:"临夏县"},{areaId:"622922",area:"康乐县"},{areaId:"622923",area:"永靖县"},{areaId:"622924",area:"广河县"},{areaId:"622925",area:"和政县"},{areaId:"622926",area:"东乡族自治县"},{areaId:"622927",area:"积石山保安族东乡族撒拉族自治县"}]},{cityId:"623000",city:"甘南藏族自治州",areas:[{areaId:"623001",area:"合作市"},{areaId:"623021",area:"临潭县"},{areaId:"623022",area:"卓尼县"},{areaId:"623023",area:"舟曲县"},{areaId:"623024",area:"迭部县"},{areaId:"623025",area:"玛曲县"},{areaId:"623026",area:"碌曲县"},{areaId:"623027",area:"夏河县"}]}]},{provinceId:"630000",province:"青海省",citys:[{cityId:"630100",city:"西宁市",areas:[{areaId:"630101",area:"市辖区"},{areaId:"630102",area:"城东区"},{areaId:"630103",area:"城中区"},{areaId:"630104",area:"城西区"},{areaId:"630105",area:"城北区"},{areaId:"630121",area:"大通回族土族自治县"},{areaId:"630122",area:"湟中县"},{areaId:"630123",area:"湟源县"}]},{cityId:"632100",city:"海东地区",areas:[{areaId:"632121",area:"平安县"},{areaId:"632122",area:"民和回族土族自治县"},{areaId:"632123",area:"乐都县"},{areaId:"632126",area:"互助土族自治县"},{areaId:"632127",area:"化隆回族自治县"},{areaId:"632128",area:"循化撒拉族自治县"}]},{cityId:"632200",city:"海北藏族自治州",areas:[{areaId:"632221",area:"门源回族自治县"},{areaId:"632222",area:"祁连县"},{areaId:"632223",area:"海晏县"},{areaId:"632224",area:"刚察县"}]},{cityId:"632300",city:"黄南藏族自治州",areas:[{areaId:"632321",area:"同仁县"},{areaId:"632322",area:"尖扎县"},{areaId:"632323",area:"泽库县"},{areaId:"632324",area:"河南蒙古族自治县"}]},{cityId:"632500",city:"海南藏族自治州",areas:[{areaId:"632521",area:"共和县"},{areaId:"632522",area:"同德县"},{areaId:"632523",area:"贵德县"},{areaId:"632524",area:"兴海县"},{areaId:"632525",area:"贵南县"}]},{cityId:"632600",city:"果洛藏族自治州",areas:[{areaId:"632621",area:"玛沁县"},{areaId:"632622",area:"班玛县"},{areaId:"632623",area:"甘德县"},{areaId:"632624",area:"达日县"},{areaId:"632625",area:"久治县"},{areaId:"632626",area:"玛多县"}]},{cityId:"632700",city:"玉树藏族自治州",areas:[{areaId:"632721",area:"玉树县"},{areaId:"632722",area:"杂多县"},{areaId:"632723",area:"称多县"},{areaId:"632724",area:"治多县"},{areaId:"632725",area:"囊谦县"},{areaId:"632726",area:"曲麻莱县"}]},{cityId:"632800",city:"海西蒙古族藏族自治州",areas:[{areaId:"632801",area:"格尔木市"},{areaId:"632802",area:"德令哈市"},{areaId:"632821",area:"乌兰县"},{areaId:"632822",area:"都兰县"},{areaId:"632823",area:"天峻县"}]}]},{provinceId:"640000",province:"宁夏回族自治区",citys:[{cityId:"640100",city:"银川市",areas:[{areaId:"640101",area:"市辖区"},{areaId:"640104",area:"兴庆区"},{areaId:"640105",area:"西夏区"},{areaId:"640106",area:"金凤区"},{areaId:"640121",area:"永宁县"},{areaId:"640122",area:"贺兰县"},{areaId:"640181",area:"灵武市"}]},{cityId:"640200",city:"石嘴山市",areas:[{areaId:"640201",area:"市辖区"},{areaId:"640202",area:"大武口区"},{areaId:"640205",area:"惠农区"},{areaId:"640221",area:"平罗县"}]},{cityId:"640300",city:"吴忠市",areas:[{areaId:"640301",area:"市辖区"},{areaId:"640302",area:"利通区"},{areaId:"640323",area:"盐池县"},{areaId:"640324",area:"同心县"},{areaId:"640381",area:"青铜峡市"}]},{cityId:"640400",city:"固原市",areas:[{areaId:"640401",area:"市辖区"},{areaId:"640402",area:"原州区"},{areaId:"640422",area:"西吉县"},{areaId:"640423",area:"隆德县"},{areaId:"640424",area:"泾源县"},{areaId:"640425",area:"彭阳县"}]},{cityId:"640500",city:"中卫市",areas:[{areaId:"640501",area:"市辖区"},{areaId:"640502",area:"沙坡头区"},{areaId:"640521",area:"中宁县"},{areaId:"640522",area:"海原县"}]}]},{provinceId:"650000",province:"新疆维吾尔自治区",citys:[{cityId:"650100",city:"乌鲁木齐市",areas:[{areaId:"650101",area:"市辖区"},{areaId:"650102",area:"天山区"},{areaId:"650103",area:"沙依巴克区"},{areaId:"650104",area:"新市区"},{areaId:"650105",area:"水磨沟区"},{areaId:"650106",area:"头屯河区"},{areaId:"650107",area:"达坂城区"},{areaId:"650108",area:"东山区"},{areaId:"650121",area:"乌鲁木齐县"}]},{cityId:"650200",city:"克拉玛依市",areas:[{areaId:"650201",area:"市辖区"},{areaId:"650202",area:"独山子区"},{areaId:"650203",area:"克拉玛依区"},{areaId:"650204",area:"白碱滩区"},{areaId:"650205",area:"乌尔禾区"}]},{cityId:"652100",city:"吐鲁番地区",areas:[{areaId:"652101",area:"吐鲁番市"},{areaId:"652122",area:"鄯善县"},{areaId:"652123",area:"托克逊县"}]},{cityId:"652200",city:"哈密地区",areas:[{areaId:"652201",area:"哈密市"},{areaId:"652222",area:"巴里坤哈萨克自治县"},{areaId:"652223",area:"伊吾县"}]},{cityId:"652300",city:"昌吉回族自治州",areas:[{areaId:"652301",area:"昌吉市"},{areaId:"652302",area:"阜康市"},{areaId:"652303",area:"米泉市"},{areaId:"652323",area:"呼图壁县"},{areaId:"652324",area:"玛纳斯县"},{areaId:"652325",area:"奇台县"},{areaId:"652327",area:"吉木萨尔县"},{areaId:"652328",area:"木垒哈萨克自治县"}]},{cityId:"652700",city:"博尔塔拉蒙古自治州",areas:[{areaId:"652701",area:"博乐市"},{areaId:"652722",area:"精河县"},{areaId:"652723",area:"温泉县"}]},{cityId:"652800",city:"巴音郭楞蒙古自治州",areas:[{areaId:"652801",area:"库尔勒市"},{areaId:"652822",area:"轮台县"},{areaId:"652823",area:"尉犁县"},{areaId:"652824",area:"若羌县"},{areaId:"652825",area:"且末县"},{areaId:"652826",area:"焉耆回族自治县"},{areaId:"652827",area:"和静县"},{areaId:"652828",area:"和硕县"},{areaId:"652829",area:"博湖县"}]},{cityId:"652900",city:"阿克苏地区",areas:[{areaId:"652901",area:"阿克苏市"},{areaId:"652922",area:"温宿县"},{areaId:"652923",area:"库车县"},{areaId:"652924",area:"沙雅县"},{areaId:"652925",area:"新和县"},{areaId:"652926",area:"拜城县"},{areaId:"652927",area:"乌什县"},{areaId:"652928",area:"阿瓦提县"},{areaId:"652929",area:"柯坪县"}]},{cityId:"653000",city:"克孜勒苏柯尔克孜自治州",areas:[{areaId:"653001",area:"阿图什市"},{areaId:"653022",area:"阿克陶县"},{areaId:"653023",area:"阿合奇县"},{areaId:"653024",area:"乌恰县"}]},{cityId:"653100",city:"喀什地区",areas:[{areaId:"653101",area:"喀什市"},{areaId:"653121",area:"疏附县"},{areaId:"653122",area:"疏勒县"},{areaId:"653123",area:"英吉沙县"},{areaId:"653124",area:"泽普县"},{areaId:"653125",area:"莎车县"},{areaId:"653126",area:"叶城县"},{areaId:"653127",area:"麦盖提县"},{areaId:"653128",area:"岳普湖县"},{areaId:"653129",area:"伽师县"},{areaId:"653130",area:"巴楚县"},{areaId:"653131",area:"塔什库尔干塔吉克自治县"}]},{cityId:"653200",city:"和田地区",areas:[{areaId:"653201",area:"和田市"},{areaId:"653221",area:"和田县"},{areaId:"653222",area:"墨玉县"},{areaId:"653223",area:"皮山县"},{areaId:"653224",area:"洛浦县"},{areaId:"653225",area:"策勒县"},{areaId:"653226",area:"于田县"},{areaId:"653227",area:"民丰县"}]},{cityId:"654000",city:"伊犁哈萨克自治州",areas:[{areaId:"654002",area:"伊宁市"},{areaId:"654003",area:"奎屯市"},{areaId:"654021",area:"伊宁县"},{areaId:"654022",area:"察布查尔锡伯自治县"},{areaId:"654023",area:"霍城县"},{areaId:"654024",area:"巩留县"},{areaId:"654025",area:"新源县"},{areaId:"654026",area:"昭苏县"},{areaId:"654027",area:"特克斯县"},{areaId:"654028",area:"尼勒克县"}]},{cityId:"654200",city:"塔城地区",areas:[{areaId:"654201",area:"塔城市"},{areaId:"654202",area:"乌苏市"},{areaId:"654221",area:"额敏县"},{areaId:"654223",area:"沙湾县"},{areaId:"654224",area:"托里县"},{areaId:"654225",area:"裕民县"},{areaId:"654226",area:"和布克赛尔蒙古自治县"}]},{cityId:"654300",city:"阿勒泰地区",areas:[{areaId:"654301",area:"阿勒泰市"},{areaId:"654321",area:"布尔津县"},{areaId:"654322",area:"富蕴县"},{areaId:"654323",area:"福海县"},{areaId:"654324",area:"哈巴河县"},{areaId:"654325",area:"青河县"},{areaId:"654326",area:"吉木乃县"}]},{cityId:"659000",city:"省直辖行政单位",areas:[{areaId:"659001",area:"石河子市"},{areaId:"659002",area:"阿拉尔市"},{areaId:"659003",area:"图木舒克市"},{areaId:"659004",area:"五家渠市"}]}]},{provinceId:"710000",province:"台湾省",citys:[]},{provinceId:"810000",province:"香港特别行政区",citys:[]},{provinceId:"820000",province:"澳门特别行政区",citys:[]}];

//showmodel.js没有数据时的默认展示
var noBeansMation = "<div class='noMation col-lg-12 col-sm-12 col-xs-12'><img src='../../assets/images/noMation.png' style='max-width:100px'/><br/><font class='noMationFont'>暂无数据</font></div>";
var noMatchingBeansMation = "<div class='noMation col-lg-12 col-sm-12 col-xs-12'><img src='../../assets/images/noMation.png' style='max-width:100px'/><br/><font class='noMationFont'>暂无匹配项</font></div>";

//动态引入获取IP的路径
document.write("<script type=\"text/javascript\" src=\"http://pv.sohu.com/cityjson?ie=utf-8\"></script>");

//动态引入模板引擎
document.write("<script type=\"text/javascript\" src=\"" + reqBasePath + "/assets/lib/layui/lay/modules/hdb/handlebars-v4.0.5.js\"></script>");

function getBaseRootPath(){
	var curWwwPath = window.document.location.href;  
    var pathName = window.document.location.pathname;  
    var pos = curWwwPath.indexOf(pathName);  
    var localhostPaht = curWwwPath.substring(0, pos);  
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);  
    return(localhostPaht + "/");//http://127.0.0.1:8080/
}

var getFileContent = function(url){
	var realPath = reqBasePath + url;
	var content = null;
	layui.$.ajax({
        url: realPath,
        dataType: 'text',
        async:false,
        success: function(data) {
        	content = data;
        }
    });
	return content;
}

//判断内容是否为空
function isNull(str){
	if(str == null || str == "" || str == '' || str == "null" || str == "undefined"){
		return true;
	}else{
		return false;
	}
}

;!function(win){
	"use strict";
	var doc = document, config = {
		modules: {}, // 记录模块物理路径
		status: {}, // 记录模块加载状态
		timeout: 10, // 符合规范的模块请求最长等待秒数
		event: {}, // 记录模块自定义事件
	}, 
	Layui = function(){
		this.v = '2.2.5'; // 版本号
	},
	getPath = function(){// 获取layui所在目录
		var jsPath = doc.currentScript ? doc.currentScript.src : function(){
			var js = doc.scripts,last = js.length - 1,src;
			for(var i = last; i > 0; i--){
				if(js[i].readyState === 'interactive'){
					src = js[i].src;
					break;
				}
			}
			return src || js[last].src;
		}();
		return jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
	}(),
	error = function(msg){// 异常提示
//		win.console && console.error && console.error('Layui hint: ' + msg);
	},
	isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
	modules = {// 内置模块
	    layer: 'modules/layer', // 弹层
	    laydate: 'modules/laydate', // 日期
	    laypage: 'modules/laypage', // 分页
	    laytpl: 'modules/laytpl', // 模板引擎
	    layim: 'modules/layim', // web通讯
	    layedit: 'modules/layedit', // 富文本编辑器
	    ueditor: 'modules/ueditor.all', // 百度富文本编辑器
	    form: 'modules/form', // 表单集
	    colorpicker: 'modules/colorpicker', //颜色选择器
	    slider: 'modules/slider', //滑块
	    upload: 'modules/upload', // 上传
	    tree: 'modules/tree', // 树结构
	    table: 'modules/table', // 表格
	    element: 'modules/element', // 常用元素操作
	    util: 'modules/util', // 工具块
	    flow: 'modules/flow', // 流加载
	    carousel: 'modules/carousel',// 轮播
	    code: 'modules/code', // 代码修饰器
	    jquery: 'modules/jquery', // DOM库（第三方）
	    fsButtonCommon: 'modules/ztree/js/fsButtonCommon',//ztree树依赖项
	    fsCommon: 'modules/ztree/js/fsCommon',//ztree树依赖项
	    fsTree: 'modules/ztree/js/fsTree',//ztree树
	    mobile: 'modules/mobile', // 移动大模块 | 若当前为开发目录，则为移动模块入口，否则为移动模块集合
	    'layui.all': '../layui.all', // PC模块合并版
	    cookie: 'modules/cookie',//cookie
	    fileUpload: 'modules/jQuery.upload.min',//上传
	    dragula: 'modules/dragula',//拖拽
	    codemirror: 'modules/codemirror/codemirror',//代码格式编辑器
	    xml: 'modules/codemirror/xml',//代码格式编辑器xml，html支持
	    clike: 'modules/codemirror/clike',//代码格式编辑器clike支持C，C++，Objective-C，Java，Scala，Kotlin，Ceylon高亮
	    css: 'modules/codemirror/css',//代码格式编辑器css支持CSS
	    htmlmixed: 'modules/codemirror/htmlmixed',//代码格式编辑器htmlmixed，HTML混合模式取决于XML，JavaScript和CSS模式支持
	    javascript: 'modules/codemirror/javascript',//代码格式编辑器javascript支持js
	    nginx: 'modules/codemirror/nginx',//代码格式编辑器nginx支持nginx
	    solr: 'modules/codemirror/solr',//代码格式编辑器solr支持solr
	    sql: 'modules/codemirror/sql',//代码格式编辑器sql支持sql
	    vue: 'modules/codemirror/vue',//代码格式编辑器vue支持vue
	    zclip: 'modules/jquery.zclip',//复制插件
	    swiper: 'modules/swiper/swiper.min',//滚动插件
	    tableSelect: 'modules/tableSelect',//tableSelect 下拉表格选择器
	    treeGrid: 'modules/treetable/treeGrid',//树表格
	    g6: 'modules/flowchart/g6.min',//流程图
	    g6Plugins: 'modules/flowchart/g6-plugins.min',//流程图
	    dtree: 'modules/dtree/dtree',//
	    jqueryUI: 'modules/jquery-ui-1.10.3.custom',//jQuery拖拽
	    validate: 'modules/validate/jquery.validate',//验证
	    ClipboardJS: 'modules/clipboard.min',//复制
	    radialin: 'modules/radialindicator/radialindicator',//加载进度条
	};

	// 记录基础数据
	Layui.prototype.cache = config;

	// 定义模块
	Layui.prototype.define = function(deps, factory){
		var that = this, type = typeof deps === 'function', callback = function(){
			var setApp = function(app, exports){
				layui[app] = exports;
				config.status[app] = true;
			};
			typeof factory === 'function' && factory(function(app, exports){
				setApp(app, exports);
				config.callback[app] = function(){
					factory(setApp);
				}
			});
			return this;
		};
		type && (factory = deps,deps = []);
		if(layui['layui.all'] || (!layui['layui.all'] && layui['layui.mobile'])){
			return callback.call(that);
		}
		that.use(deps, callback);
		return that;
	};

	// 使用特定模块
	Layui.prototype.use = function(apps, callback, exports) {
		var that = this,
			dir = config.dir = config.dir ? config.dir : getPath,
			head = doc.getElementsByTagName('head')[0];
		apps = typeof apps === 'string' ? [apps] : apps;
		// 如果页面已经存在jQuery1.7+库且所定义的模块依赖jQuery，则不加载内部jquery模块
		if(window.jQuery && jQuery.fn.on) {
			that.each(apps, function(index, item) {
				if(item === 'jquery') {
					apps.splice(index, 1);
				}
			});
			layui.jquery = layui.$ = jQuery;
		}

		var item = apps[0],
			timeout = 0;
		exports = exports || [];

		// 静态资源host
		config.host = config.host || (dir.match(/\/\/([\s\S]+?)\//) || ['//' + location.host + '/'])[0];

		// 加载完毕
		function onScriptLoad(e, url) {
			var readyRegExp = navigator.platform === 'PLaySTATION 3' ? /^complete$/ : /^(complete|loaded)$/
			if(e.type === 'load' || (readyRegExp.test((e.currentTarget || e.srcElement).readyState))) {
				config.modules[item] = url;
				head.removeChild(node);
				(function poll() {
					if(++timeout > config.timeout * 1000 / 4) {
						return error(item + ' is not a valid module');
					};
					config.status[item] ? onCallback() : setTimeout(poll, 4);
				}());
			}
		}

		// 回调
		function onCallback() {
			exports.push(layui[item]);
			apps.length > 1 ?
				that.use(apps.slice(1), callback, exports) :
				(typeof callback === 'function' && callback.apply(layui, exports));
		}

		// 如果使用了 layui.all.js
		if(apps.length === 0 ||
			(layui['layui.all'] && modules[item]) ||
			(!layui['layui.all'] && layui['layui.mobile'] && modules[item])
		) {
			return onCallback(), that;
		}

		// 首次加载模块
		if(!config.modules[item]) {
			var node = doc.createElement('script'),
				// 如果是内置模块，则按照 dir 参数拼接模块路径
				// 如果是扩展模块，则判断模块路径值是否为 {/} 开头，
				// 如果路径值是 {/} 开头，则模块路径即为后面紧跟的字符。
				// 否则，则按照 base 参数拼接模块路径
				url = (modules[item] ? (dir + 'lay/') :
					(/^\{\/\}/.test(that.modules[item]) ? '' : (config.base || ''))
				) + (that.modules[item] || item) + '.js';
			url = url.replace(/^\{\/\}/, '');
			//判断URL拼接可访问路径
			if(url.indexOf("http://") >= 0 || url.indexOf("https://") >= 0){
			}else{
				if(isNull(modules[item])){
					url = fileBasePath + url.replace("../../", "");
				}else{
					url = fileBasePath + "assets/lib/layui/" + url.replace("../../", "");
				}
			}
			node.async = true;
			node.charset = 'utf-8';
			node.src = url + function() {
				var version = config.version === true ?
					(config.v || (new Date()).getTime()) :
					(config.version || '');
				return version ? ('?v=' + version) : '';
			}();

			head.appendChild(node);

			if(node.attachEvent && !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) && !isOpera) {
				node.attachEvent('onreadystatechange', function(e) {
					onScriptLoad(e, url);
				});
			} else {
				node.addEventListener('load', function(e) {
					onScriptLoad(e, url);
				}, false);
			}
			config.modules[item] = url;
		} else { // 缓存
			(function poll() {
				if(++timeout > config.timeout * 1000 / 4) {
					return error(item + ' is not a valid module');
				};
				(typeof config.modules[item] === 'string' && config.status[item]) ?
				onCallback(): setTimeout(poll, 4);
			}());
		}

		return that;
	};

	// 获取节点的style属性值
	Layui.prototype.getStyle = function(node, name) {
		var style = node.currentStyle ? node.currentStyle : win.getComputedStyle(node, null);
		return style[style.getPropertyValue ? 'getPropertyValue' : 'getAttribute'](name);
	};

	// css外部加载器
	Layui.prototype.link = function(href, fn, cssname) {
		var that = this,
			link = doc.createElement('link'),
			head = doc.getElementsByTagName('head')[0];

		if(typeof fn === 'string') cssname = fn;

		var app = (cssname || href).replace(/\.|\//g, ''),
			id = link.id = 'layuicss-' + app,
			timeout = 0;

		link.rel = 'stylesheet';
		link.href = href + (config.debug ? '?v=' + new Date().getTime() : '');
		link.media = 'all';

		if(!doc.getElementById(id)) {
			head.appendChild(link);
		}

		if(typeof fn !== 'function') return that;

		// 轮询css是否加载完毕
		(function poll() {
			if(++timeout > config.timeout * 1000 / 100) {
				return error(href + ' timeout');
			};
			parseInt(that.getStyle(doc.getElementById(id), 'width')) === 1989 ? function() {
				fn();
			}() : setTimeout(poll, 100);
		}());

		return that;
	};

	// 存储模块的回调
	config.callback = {};

	// 重新执行模块的工厂函数
	Layui.prototype.factory = function(modName) {
		if(layui[modName]) {
			return typeof config.callback[modName] === 'function' ?
				config.callback[modName] :
				null;
		}
	};

	// css内部加载器
	Layui.prototype.addcss = function(firename, fn, cssname) {
		return layui.link(config.dir + 'css/' + firename, fn, cssname);
	};

	// 图片预加载
	Layui.prototype.img = function(url, callback, error) {
		var img = new Image();
		img.src = url;
		if(img.complete) {
			return callback(img);
		}
		img.onload = function() {
			img.onload = null;
			callback(img);
		};
		img.onerror = function(e) {
			img.onerror = null;
			error(e);
		};
	};

	// 全局配置
	Layui.prototype.config = function(options) {
		options = options || {};
		for(var key in options) {
			config[key] = options[key];
		}
		return this;
	};

	// 记录全部模块
	Layui.prototype.modules = function() {
		var clone = {};
		for(var o in modules) {
			clone[o] = modules[o];
		}
		return clone;
	}();

	// 拓展模块
	Layui.prototype.extend = function(options) {
		var that = this;

		// 验证模块是否被占用
		options = options || {};
		for(var o in options) {
			if(that[o] || that.modules[o]) {
				error('\u6A21\u5757\u540D ' + o + ' \u5DF2\u88AB\u5360\u7528');
			} else {
				that.modules[o] = options[o];
			}
		}

		return that;
	};

	// 路由解析
	Layui.prototype.router = function(hash) {
		var that = this,
			hash = hash || location.hash,
			data = {
				path: [],
				search: {},
				hash: (hash.match(/[^#](#.*$)/) || [])[1] || ''
			};

		if(!/^#\//.test(hash)) return data; // 禁止非路由规范
		data.href = hash = hash.replace(/^#\//, '');
		hash = hash.replace(/([^#])(#.*$)/, '$1').split('/') || [];

		// 提取Hash结构
		that.each(hash, function(index, item) {
			/^\w+=/.test(item) ? function() {
				item = item.split('=');
				data.search[item[0]] = item[1];
			}() : data.path.push(item);
		});

		return data;
	};

	// 本地持久性存储
	Layui.prototype.data = function(table, settings, storage) {
		table = table || 'layui';
		storage = storage || localStorage;

		if(!win.JSON || !win.JSON.parse) return;

		// 如果settings为null，则删除表
		if(settings === null) {
			return delete storage[table];
		}

		settings = typeof settings === 'object' ?
			settings :
			{
				key: settings
			};

		try {
			var data = JSON.parse(storage[table]);
		} catch(e) {
			var data = {};
		}

		if('value' in settings) data[settings.key] = settings.value;
		if(settings.remove) delete data[settings.key];
		storage[table] = JSON.stringify(data);

		return settings.key ? data[settings.key] : data;
	};

	// 本地会话性存储
	Layui.prototype.sessionData = function(table, settings) {
		return this.data(table, settings, sessionStorage);
	}

	// 设备信息
	Layui.prototype.device = function(key) {
		var agent = navigator.userAgent.toLowerCase()

			// 获取版本号
			,
			getVersion = function(label) {
				var exp = new RegExp(label + '/([^\\s\\_\\-]+)');
				label = (agent.match(exp) || [])[1];
				return label || false;
			}

			// 返回结果集
			,
			result = {
				os: function() { // 底层操作系统
					if(/windows/.test(agent)) {
						return 'windows';
					} else if(/linux/.test(agent)) {
						return 'linux';
					} else if(/iphone|ipod|ipad|ios/.test(agent)) {
						return 'ios';
					} else if(/mac/.test(agent)) {
						return 'mac';
					}
				}(),
				ie: function() { // ie版本
					return(!!win.ActiveXObject || "ActiveXObject" in win) ? (
						(agent.match(/msie\s(\d+)/) || [])[1] || '11' // 由于ie11并没有msie的标识
					) : false;
				}(),
				weixin: getVersion('micromessenger') // 是否微信
			};

		// 任意的key
		if(key && !result[key]) {
			result[key] = getVersion(key);
		}

		// 移动设备
		result.android = /android/.test(agent);
		result.ios = result.os === 'ios';

		return result;
	};

	// 提示
	Layui.prototype.hint = function() {
		return {
			error: error
		}
	};

	// 遍历
	Layui.prototype.each = function(obj, fn) {
		var key, that = this;
		if(typeof fn !== 'function') return that;
		obj = obj || [];
		if(obj.constructor === Object) {
			for(key in obj) {
				if(fn.call(obj[key], key, obj[key])) break;
			}
		} else {
			for(key = 0; key < obj.length; key++) {
				if(fn.call(obj[key], key, obj[key])) break;
			}
		}
		return that;
	};

	// 将数组中的对象按其某个成员排序
	Layui.prototype.sort = function(obj, key, desc) {
		var clone = JSON.parse(
			JSON.stringify(obj || [])
		);

		if(!key) return clone;

		// 如果是数字，按大小排序，如果是非数字，按字典序排序
		clone.sort(function(o1, o2) {
			var isNum = /^-?\d+$/,
				v1 = o1[key],
				v2 = o2[key];

			if(isNum.test(v1)) v1 = parseFloat(v1);
			if(isNum.test(v2)) v2 = parseFloat(v2);

			if(v1 && !v2) {
				return 1;
			} else if(!v1 && v2) {
				return -1;
			}

			if(v1 > v2) {
				return 1;
			} else if(v1 < v2) {
				return -1;
			} else {
				return 0;
			}
		});

		desc && clone.reverse(); // 倒序
		return clone;
	};

	// 阻止事件冒泡
	Layui.prototype.stope = function(thisEvent) {
		thisEvent = thisEvent || win.event;
		try {
			thisEvent.stopPropagation()
		} catch(e) {
			thisEvent.cancelBubble = true;
		}
	};

	// 自定义模块事件
	Layui.prototype.onevent = function(modName, events, callback) {
		if(typeof modName !== 'string' ||
			typeof callback !== 'function') return this;

		return Layui.event(modName, events, null, callback);
	};

	// 执行自定义模块事件
	Layui.prototype.event = Layui.event = function(modName, events, params, fn) {
		var that = this,
			result = null,
			filter = events.match(/\((.*)\)$/) || [] // 提取事件过滤器字符结构，如：select(xxx)
			,
			eventName = (modName + '.' + events).replace(filter[0], '') // 获取事件名称，如：form.select
			,
			filterName = filter[1] || '' // 获取过滤器名称,，如：xxx
			,
			callback = function(_, item) {
				var res = item && item.call(that, params);
				res === false && result === null && (result = false);
			};

		// 添加事件
		if(fn) {
			config.event[eventName] = config.event[eventName] || {};

			// 这里不再对多次事件监听做支持，避免更多麻烦
			// config.event[eventName][filterName] ?
			// config.event[eventName][filterName].push(fn) :
			config.event[eventName][filterName] = [fn];
			return this;
		}

		// 执行事件回调
		layui.each(config.event[eventName], function(key, item) {
			// 执行当前模块的全部事件
			if(filterName === '{*}') {
				layui.each(item, callback);
				return;
			}

			// 执行指定事件
			key === '' && layui.each(item, callback);
			key === filterName && layui.each(item, callback);
		});

		return result;
	};

	win.layui = new Layui();
  
}(window);

/**
 * 获取cookie值
 * @param name
 * @returns
 */
function getCookie(name){
	var strcookie = document.cookie;//获取cookie字符串
	var arrcookie = strcookie.split("; ");//分割
	//遍历匹配
	for ( var i = 0; i < arrcookie.length; i++) {
		var arr = arrcookie[i].split("=");
		if (arr[0] == name){
			return arr[1];
		}
	}
	return "";
}

//ajax请求
var AjaxPostUtil = {
	// 基础选项  
	options: {
		method: "post", // 默认提交的方法,get post  
		url: "", // 请求的路径 required  
		params: {}, // 请求的参数  
		async: false,//同步
		type: 'text', // 返回的内容的类型,text,xml,json  
		callback: function() {}, // 回调函数 required  
	},

	// 创建XMLHttpRequest对象  
	createRequest: function() {
		var xmlhttp;
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); // IE6以上版本  
		} catch(e) {
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // IE6以下版本  
			} catch(e) {
				try {
					xmlhttp = new XMLHttpRequest();
					if(xmlhttp.overrideMimeType) {
						xmlhttp.overrideMimeType("text/xml");
					}
				} catch(e) {
					alert("您的浏览器不支持Ajax");
				}
			}
		}
		return xmlhttp;
	},
	// 设置基础选项  
	setOptions: function(newOptions) {
		for(var pro in newOptions) {
			this.options[pro] = newOptions[pro];
		}
	},
	// 格式化请求参数  
	formateParameters: function() {
		var paramsArray = [];
		var params = this.options.params;
		for(var pro in params) {
			var paramValue = params[pro];
			/*if(this.options.method.toUpperCase() === "GET")  
			{  
			    paramValue = encodeURIComponent(params[pro]);  
			}*/
			paramsArray.push(pro + "=" + paramValue);
		}
		paramsArray.push("userToken=" + getCookie('userToken'));
		paramsArray.push("loginPCIp=" + returnCitySN["cip"]);
		return paramsArray.join("&");
	},

	// 状态改变的处理  
	readystatechange: function(xmlhttp) {
		var sessionstatus = xmlhttp.getResponseHeader("SESSIONSTATUS");
		var requestmation = xmlhttp.getResponseHeader("REQUESTMATION");
		if (sessionstatus == "TIMEOUT") {//超时跳转
			var win = window;
			while (win != win.top){
				win = win.top;
			}
			win.location.href = "login.html";//XMLHttpRequest.getResponseHeader("CONTEXTPATH");  
		}
		// 获取返回值  
		var returnValue;
		if(xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 0)) {
			switch(this.options.type) {
				case "xml":
					returnValue = xmlhttp.responseXML;
					break;
				case "json":
					var jsonText = xmlhttp.responseText;
					if(requestmation == 'DOWNLOAD'){
						returnValue = eval('(' + '{"returnMessage":"成功","returnCode":0,"total":0,"rows":"","bean":""}' + ')');
					}else{
						if(jsonText) {
							returnValue = eval("(" + jsonText + ")");
						}
					}
					break;
				default:
					returnValue = xmlhttp.responseText;
					break;
			}
			if(returnValue) {
				this.options.callback.call(this, returnValue);
			} else {
				this.options.callback.call(this);
			}
		}
	},

	// 发送Ajax请求  
	request: function(options) {
		var ajaxObj = this;
		// 设置参数  
		ajaxObj.setOptions.call(ajaxObj, options);
		// 创建XMLHttpRequest对象  
		var xmlhttp = ajaxObj.createRequest.call(ajaxObj);
		// 设置回调函数  
		xmlhttp.onreadystatechange = function() {
			ajaxObj.readystatechange.call(ajaxObj, xmlhttp);
		};
		// 格式化参数  
		var formateParams = ajaxObj.formateParameters.call(ajaxObj);
		// 请求的方式  
		var method = ajaxObj.options.method;
		var url = ajaxObj.options.url;
		if("GET" === method.toUpperCase()) {
			url += "?" + formateParams;
		}
		// 建立连接  
		xmlhttp.open(method, url, true);
		if("GET" === method.toUpperCase()) {
			xmlhttp.send(null);
		} else if("POST" === method.toUpperCase()) {
			// 如果是POST提交，设置请求头信息  
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xmlhttp.send(formateParams);
		}
	}
};

var AjaxGetUtil = {
	// 基础选项  
	options: {
		method: "get", // 默认提交的方法,get post  
		url: "", // 请求的路径 required  
		params: {}, // 请求的参数  
		async:false,//同步
		type: 'text', // 返回的内容的类型,text,xml,json  
		callback: function() {} // 回调函数 required  
	},

	// 创建XMLHttpRequest对象  
	createRequest: function() {
		var xmlhttp;
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); // IE6以上版本  
		} catch(e) {
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // IE6以下版本  
			} catch(e) {
				try {
					xmlhttp = new XMLHttpRequest();
					if(xmlhttp.overrideMimeType) {
						xmlhttp.overrideMimeType("text/xml");
					}
				} catch(e) {
					alert("您的浏览器不支持Ajax");
				}
			}
		}
		return xmlhttp;
	},
	// 设置基础选项  
	setOptions: function(newOptions) {
		for(var pro in newOptions) {
			this.options[pro] = newOptions[pro];
		}
	},
	// 格式化请求参数  
	formateParameters: function() {
		var paramsArray = [];
		var params = this.options.params;
		for(var pro in params) {
			var paramValue = params[pro];
			/*if(this.options.method.toUpperCase() === "GET")  
			{  
			    paramValue = encodeURIComponent(params[pro]);  
			}*/
			paramsArray.push(pro + "=" + paramValue);
		}
		paramsArray.push("userToken=" + getCookie('userToken'));
		paramsArray.push("loginPCIp=" + returnCitySN["cip"]);
		return paramsArray.join("&");
	},

	// 状态改变的处理  
	readystatechange: function(xmlhttp) {
		var sessionstatus = xmlhttp.getResponseHeader("SESSIONSTATUS");
		if (sessionstatus == "TIMEOUT") {//超时跳转
			var win = window;
			while (win != win.top){
				win = win.top;
			}
			win.location.href = "login.html";//XMLHttpRequest.getResponseHeader("CONTEXTPATH");  
		}
		// 获取返回值  
		var returnValue;
		if(xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 0)) {
			switch(this.options.type) {
				case "xml":
					returnValue = xmlhttp.responseXML;
					break;
				case "json":
					var jsonText = xmlhttp.responseText;
					if(jsonText) {
						returnValue = eval("(" + jsonText + ")");
					}
					break;
				default:
					returnValue = xmlhttp.responseText;
					break;
			}
			if(returnValue) {
				this.options.callback.call(this, returnValue);
			} else {
				this.options.callback.call(this);
			}
		}
	},

	// 发送Ajax请求  
	request: function(options) {
		var ajaxObj = this;
		// 设置参数  
		ajaxObj.setOptions.call(ajaxObj, options);
		// 创建XMLHttpRequest对象  
		var xmlhttp = ajaxObj.createRequest.call(ajaxObj);
		// 设置回调函数  
		xmlhttp.onreadystatechange = function() {
			ajaxObj.readystatechange.call(ajaxObj, xmlhttp);
		};
		// 格式化参数  
		var formateParams = ajaxObj.formateParameters.call(ajaxObj);
		// 请求的方式  
		var method = ajaxObj.options.method;
		var url = ajaxObj.options.url;
		if("GET" === method.toUpperCase()) {
			url += "?" + formateParams;
		}
		// 建立连接  
		xmlhttp.open(method, url, true);
		if("GET" === method.toUpperCase()) {
			xmlhttp.send(null);
		} else if("POST" === method.toUpperCase()) {
			// 如果是POST提交，设置请求头信息  
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xmlhttp.send(formateParams);
		}
	}
};

function returnModel(lang){
	var mode = '';
	switch (lang) {
	case 'Java':
		mode = 'text/x-java';
		break;
	case 'C/C++':
		mode = 'text/x-c++src';
		break;
	case 'Objective-C':
		mode = '';
		break;
	case 'Scala':
		mode = 'text/x-scala';
		break;
	case 'Kotlin':
		mode = 'text/x-kotlin';
		break;
	case 'Ceylon':
		mode = 'text/x-ceylon';
		break;
	case 'xml':
		mode = 'xml';
		break;
	case 'html':
		mode = 'xml';
		break;
	case 'css':
		mode = 'text/css';
		break;
	case 'htmlmixed':
		mode = 'htmlmixed';
		break;
	case 'htmlhh':
		mode = 'htmlmixed';
		break;
	case 'javascript':
		mode = 'text/javascript';
		break;
	case 'nginx':
		mode = 'text/x-nginx-conf';
		break;
	case 'solr':
		mode = 'text/x-solr';
		break;
	case 'sql':
		mode = 'text/x-sql';
		break;
	case 'vue':
		mode = 'text/x-vue';
		break;
	}
	return mode;
}

/**
 * 替换代码生成器模板内容
 * @param str
 */
function replaceModelContent(str, ControllerPackageName, ServicePackageName, ServiceImplPackageName,
		DaoPackageName, tableZhName, tableFirstISlowerName, tableISlowerName, tableBzName){
	str = str.replace(/[$]{{controllerPackage}}/g, ControllerPackageName);
	str = str.replace(/[$]{{servicePackage}}/g, ServicePackageName);
	str = str.replace(/[$]{{serviceImplPackage}}/g, ServiceImplPackageName);
	str = str.replace(/[$]{{daoPackage}}/g, DaoPackageName);
	str = str.replace(/[$]{{tableName}}/g, tableZhName);
	str = str.replace(/[$]{{objectName}}/g, tableFirstISlowerName);
	str = str.replace(/[$]{{urlName}}/g, tableISlowerName);
	str = str.replace(/[$]{{notesName}}/g, tableBzName);
	return str;
}

function show(id, url) {
    var imgSuffix = ["png", "jpg", "jpeg", "gif", "bmp"];
    if (imgSuffix.indexOf(url.substring(url.lastIndexOf(".") + 1).toLowerCase()) < 0) {
        window.open(url);
        return false;
    }

    var imgs = layui.$(id).find("input[type='hidden'][name='upload']").val().split(",");
    var data = [];
    layui.$.each(imgs, function (k, v) {
        var suffix = v.substring(v.lastIndexOf(".") + 1);
        if (imgSuffix.indexOf(suffix.toLowerCase()) > -1) {
            var json = {
                "alt": "",
                "pid": k, //图片id
                "src": v, //原图地址
                "thumb": "" //缩略图地址
            }
            data.push(json);
        }
    })

    layer.photos({
        photos: {
            "title": "", //相册标题
            "id": 123, //相册id
            "start": 0, //初始显示的图片序号，默认0
            "data": data
        } //格式见API文档手册页
        , anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机
    });
}

/** 
 * 时间戳格式化函数 
 * @param  {string} format    格式 
 * @param  {int}    timestamp 要格式化的时间 默认为当前时间 
 * @return {string}           格式化的时间字符串 
 */
function date(format, timestamp){  
    var a, jsdate=((timestamp) ? new Date(timestamp*1000) : new Date()); 
    var pad = function(n, c){ 
        if((n = n + "").length < c){ 
            return new Array(++c - n.length).join("0") + n; 
        } else { 
            return n; 
        } 
    }; 
    var txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    var txt_ordin = {1:"st", 2:"nd", 3:"rd", 21:"st", 22:"nd", 23:"rd", 31:"st"}; 
    var txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
    var f = { 
        d: function(){return pad(f.j(), 2)}, 
        D: function(){return f.l().substr(0,3)}, 
        j: function(){return jsdate.getDate()}, 
        l: function(){return txt_weekdays[f.w()]}, 
        N: function(){return f.w() + 1}, 
        S: function(){return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th'}, 
        w: function(){return jsdate.getDay()}, 
        z: function(){return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0}, 
        W: function(){ 
            var a = f.z(), b = 364 + f.L() - a; 
            var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1; 
            if(b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b){ 
                return 1; 
            } else{ 
                if(a <= 2 && nd >= 4 && a >= (6 - nd)){ 
                    nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31"); 
                    return date("W", Math.round(nd2.getTime()/1000)); 
                } else{ 
                    return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0); 
                } 
            } 
        }, 
        F: function(){return txt_months[f.n()]}, 
        m: function(){return pad(f.n(), 2)}, 
        M: function(){return f.F().substr(0,3)}, 
        n: function(){return jsdate.getMonth() + 1}, 
        t: function(){ 
            var n; 
            if( (n = jsdate.getMonth() + 1) == 2 ){ 
                return 28 + f.L(); 
            } else{ 
                if( n & 1 && n < 8 || !(n & 1) && n > 7 ){ 
                    return 31; 
                } else{ 
                    return 30; 
                } 
            } 
        }, 
        L: function(){var y = f.Y();return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0}, 
        Y: function(){return jsdate.getFullYear()}, 
        y: function(){return (jsdate.getFullYear() + "").slice(2)}, 
        a: function(){return jsdate.getHours() > 11 ? "pm" : "am"}, 
        A: function(){return f.a().toUpperCase()}, 
        B: function(){ 
            var off = (jsdate.getTimezoneOffset() + 60)*60; 
            var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off; 
            var beat = Math.floor(theSeconds/86.4); 
            if (beat > 1000) beat -= 1000; 
            if (beat < 0) beat += 1000; 
            if ((String(beat)).length == 1) beat = "00"+beat; 
            if ((String(beat)).length == 2) beat = "0"+beat; 
            return beat; 
        }, 
        g: function(){return jsdate.getHours() % 12 || 12}, 
        G: function(){return jsdate.getHours()}, 
        h: function(){return pad(f.g(), 2)}, 
        H: function(){return pad(jsdate.getHours(), 2)}, 
        i: function(){return pad(jsdate.getMinutes(), 2)}, 
        s: function(){return pad(jsdate.getSeconds(), 2)}, 
        O: function(){ 
            var t = pad(Math.abs(jsdate.getTimezoneOffset()/60*100), 4); 
            if (jsdate.getTimezoneOffset() > 0) t = "-" + t; else t = "+" + t; 
            return t; 
        }, 
        P: function(){var O = f.O();return (O.substr(0, 3) + ":" + O.substr(3, 2))}, 
        c: function(){return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P()}, 
        U: function(){return Math.round(jsdate.getTime()/1000)} 
    }; 
        
    return format.replace(/[\\]?([a-zA-Z])/g, function(t, s){ 
        if( t!=s ){ 
            ret = s; 
        } else if( f[s] ){ 
            ret = f[s](); 
        } else{ 
            ret = s; 
        } 
        return ret; 
    }); 
}

/**
 * 获取当前时间
 * @returns {String}
 */
function getFormatDate(){
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    var hour = nowDate.getHours()< 10 ? "0" + nowDate.getHours() : nowDate.getHours();
    var minute = nowDate.getMinutes()< 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
    var second = nowDate.getSeconds()< 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}


