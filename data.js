/* 2026Spring V13：流量按用户存档报表核对；配方名明确标出默认 / 替代。 */
const icons={steel:'/icons/steel-pipe.png',oil:'/icons/plastic.png',electronics:'/icons/supercomputer.png',quartz:'/icons/caterium-ingot.png',coal:'/icons/coal.png',heavy:'/icons/heavy-modular-frame.png',aluminum:'/icons/aluminum-casing.png',starter:'/icons/quartz-crystal.png',nitrogen:'/icons/battery.png'};
const line=(zone,name,recipe,input,output,icon)=>({zone,name,recipe,input,output,icon});
const factories=[
 {id:'main',tag:'CORE',name:'主基地综合工业区',pos:'mark-main',icon:icons.steel,products:['钢管 20','钢梁 15','定子 5','马达 5','多功能框架 5','自动化线缆 5','诺贝利斯克 10'],summary:'基础件、450 钢锭体系、电梯件、弹药与 SAM 的综合中心。',inputs:[['钢区铁矿','1543/3','传送带','2 高纯 Mk.2；能力 720，余 617/3','main'],['钢区煤矿','325','传送带','能力 720，余 395','main'],['铜矿','180','传送带','高纯 Mk.2，余 60','main'],['石灰石','120','传送带','高纯 Mk.1，已吃满','main']],chain:[
  line('A · 钢锭炉组','坚固钢锭','替代：Solid Steel Ingot','铁矿 300 + 煤 300','钢锭 450',icons.steel),
  line('B · 钢材分流','钢管与钢梁','默认：Steel Pipe / Steel Beam','钢锭 372','钢管 80 + 钢梁 63（含内部需求）',icons.steel),
  line('C · 动力件','定子与马达','默认：Stator / Motor','钢管、钢梁、铜件','定子 5 + 马达 5',icons.steel),
  line('D · 电梯件','多功能框架与自动化线缆','默认：Versatile Framework / Automated Wiring','钢材、混凝土、铜件','多功能框架 5 + 自动化线缆 5',icons.steel),
  line('E · 弹药','黑火药与诺贝利斯克','默认：Black Powder / Nobelisk','煤 25 + 硫 25 + 钢锭 30','黑火药 30 + 诺贝利斯克 10',icons.coal),
  line('F · 特殊物料','重生 SAM','默认：Reanimated SAM','SAM 240','Reanimated SAM 60',icons.quartz)
 ],outputs:[['主基地仓库','钢管 20、钢梁 15 等','仓储','storage'],['电子厂','铁线及主基地内线物料','传送带','electronics']]},
 {id:'oil',tag:'OIL',name:'石油·橡塑·燃油区',pos:'mark-oil',icon:icons.oil,products:['塑料 480','橡胶 240','燃油发电 8000 MW'],summary:'两套 240 原油系统：回收橡塑与燃油发电。',inputs:[['橡塑油井','原油 240','管道','已吃满','oil'],['发电油井','原油 240','管道','已吃满','oil'],['水站','水 1440','管道','橡塑 800 + 发电 640','oil']],chain:[
  line('A · 橡塑前处理','重油残渣','替代：Heavy Oil Residue','原油 240','重油残渣',icons.oil),
  line('B · 橡塑燃料','稀释燃油','替代：Diluted Fuel','重油残渣 + 水 800','燃油',icons.oil),
  line('C · 橡塑循环','回收塑料与橡胶','替代：Recycled Plastic / Recycled Rubber','燃油循环','塑料 480 + 橡胶 240',icons.oil),
  line('D · 发电前处理','重油残渣 + 稀释燃油','替代：Heavy Oil Residue / Diluted Fuel','原油 240 + 水 640','燃油',icons.oil),
  line('E · 发电机组','燃油发电','默认：Fuel Generator','燃油','8000 MW',icons.oil)
 ],outputs:[['电子厂','塑料 12685/56、橡胶 645/4','铁路/卡车','electronics'],['橡塑仓库','塑料余 14195/56、橡胶余 315/4','仓储','storage']]},
 {id:'electronics',tag:'ELEC',name:'电子厂·超级计算机专线',pos:'mark-electronics',icon:icons.electronics,products:['电路板 15/4','AI 限制器 25/4','晶振 9/4','计算机 15/2','高速连接器 15/4','RCU 9/2','超级计算机 15/8'],summary:'原电子区与从零开始的超级计算机专线并行。',inputs:[['钦矿水洗区','钦锭 657/4','卡车/传送带','高纯 Mk.2 250%；600 矿 → 300 锭','quartz'],['石油区','塑料 12685/56、橡胶 645/4','铁路/卡车','两套产线合计','oil'],['石英区','晶体 75/2、SiO₂ 1125/16','卡车','两座石英矿供货','quartz'],['铝厂','铝制外壳 90','铁路','主基地铝下货','aluminum'],['主基地','铁矿 125/3','内线','现场做铁线电缆','main']],chain:[
  line('A · 原电子区','钦基电路板 ×6','替代：Caterium Circuit Board','钦锭、塑料','电路板',icons.quartz),
  line('B · 原电子区','塑料 AI 限制器 ×5/4','替代：Plastic AI Limiter','塑料、铜件','AI 限制器',icons.oil),
  line('C · 原电子区','绝缘晶体振荡器 ×2','替代：Insulated Crystal Oscillator','橡胶、石英晶体','晶体振荡器',icons.quartz),
  line('D · 原电子区','钦基计算机 ×2','替代：Caterium Computer','钦锭、橡胶、晶体','计算机',icons.quartz),
  line('E · 原电子区','高速连接器与 RCU','默认：High-Speed Connector；默认：Radio Control Unit','钦锭、铝制外壳、电缆','高速连接器 15/4 + RCU 9/2',icons.electronics),
  line('F · 超算专线','超算专用基础件','替代：Caterium Circuit Board / Caterium Computer / Silicon High-Speed Connector / Plastic AI Limiter','钦锭 2703/28 + 塑料 6525/56 + 橡胶 45 + SiO₂ 1125/16','超算基础件',icons.quartz),
  line('G · 超算专线','超级计算机 ×1','默认：Supercomputer','计算机、AI 限制器、高速连接器、塑料','超级计算机 15/8',icons.electronics)
 ],outputs:[['电子产品仓','原电子区净产物','传送带','storage'],['超级计算机上货站','超级计算机 15/8','卡车站','storage']]},
 {id:'quartz',tag:'QZ',name:'钦与石英加工区',pos:'mark-quartz',icon:icons.quartz,products:['钦锭 300','二氧化硅 400','石英晶体 144'],summary:'钦矿水洗和两条满载石英前处理线。',inputs:[['高纯钦矿','钦矿 600','传送带','Mk.2 250%，已吃满','quartz'],['二氧化硅石英矿','原石英 240','传送带','高纯 Mk.2，已吃满','quartz'],['晶体石英矿','原石英 240','传送带','高纯 Mk.2，已吃满','quartz']],chain:[
  line('A · 钦锭水洗','Pure Caterium Ingot','替代：Pure Caterium Ingot','钦矿 600 + 水 600','钦锭 300',icons.quartz),
  line('B · 二氧化硅','二氧化硅','默认：Silica','原石英 240','SiO₂ 400',icons.quartz),
  line('C · 晶体','石英晶体','默认：Quartz Crystal','原石英 240','石英晶体 144',icons.quartz)
 ],outputs:[['电子厂','钦锭 657/4、SiO₂ 1125/16、晶体 75/2','卡车','electronics'],['石英仓库','SiO₂ 余 5275/16、晶体余 213/2','仓储','storage']]},
 {id:'coal',tag:'POWER',name:'燃煤发电站',pos:'mark-coal',icon:icons.coal,products:['2400 MW 毛发电'],summary:'两座高纯 Mk.2 煤矿满载供应 32 台煤电机。',inputs:[['2 个高纯煤矿','煤 480','传送带','Mk.2 100%，无余量','coal'],['抽水站','水 1440','管道','12 台抽水机','coal']],chain:[line('A · 燃煤机组','燃煤发电 ×32','默认：Coal Generator','煤 480 + 水 1440','2400 MW',icons.coal)],outputs:[['全图电网','2400 MW','电线','power']]},
 {id:'heavy',tag:'HMF',name:'重型模块化框架厂',pos:'mark-heavy',icon:icons.heavy,products:['重型模块化框架 45/8','混凝土余 25','铁锭余 108560/189','煤余 730'],summary:'湿混凝土、水洗铁锭、坚固钢锭和 Heavy Encased Frame 闭环。',inputs:[['高纯铁矿','铁矿 480','传送带','Mk.2 200%，已吃满','heavy'],['湿混凝土外站','混凝土 160','卡车','石灰石 240 + 水 200','heavy'],['重工煤矿区','煤 230','传送带','2 高纯 Mk.2 200%；能力 960，余 730','heavy'],['600 水站','水 3320/7','管道','余水 880/7','heavy']],chain:[
  line('A · 混凝土外站','湿混凝土','替代：Wet Concrete','石灰石 240 + 水 200','混凝土 160',icons.heavy),
  line('B · 铁锭水洗','水洗铁锭','替代：Pure Iron Ingot','铁矿 480 + 水 1920/7','铁锭 6240/7',icons.steel),
  line('C · 钢管炉组','坚固钢锭 → 钢管','替代：Solid Steel Ingot；默认：Steel Pipe','铁锭 230 + 煤 230','钢锭 345 → 钢管 230',icons.steel),
  line('D · 铁件区','铁线与缝合铁板','替代：Iron Wire；替代：Stitched Iron Plate','铁锭 2350/27','加强铁板 10',icons.steel),
  line('E · 框架区','钢制框架','默认：Modular Frame','加强铁板 10 + 钢管 50','模块化框架 15',icons.heavy),
  line('F · 封装梁','Encased Industrial Pipe','替代：Encased Industrial Pipe','钢管 225/2 + 混凝土 375/4','钢筋混凝土梁 75/4',icons.heavy),
  line('G · 成品区','Heavy Encased Frame ×2','替代：Heavy Encased Frame','框架 15 + 梁 75/4 + 钢管 135/2 + 混凝土 165/4','重型模块化框架 45/8',icons.heavy)
 ],outputs:[['重工成品仓','HMF 45/8','传送带','storage'],['重工余料仓','混凝土 25 + 铁锭 108560/189','传送带','storage']]},
 {id:'aluminum',tag:'AL',name:'铝材·电池联合厂',pos:'mark-aluminum',icon:icons.aluminum,products:['铝制外壳 225','复合铝板 180','电池 40','铜锭余 390'],summary:'600 铝土矿、纯铝锭、铜水洗、铝制外壳和电池联合厂。',inputs:[['铝土矿','600','传送带','高纯 Mk.2 250%，已吃满','aluminum'],['煤炭上货线','煤 320','铁路','2 高纯 Mk.2 200%；余 640','aluminum'],['铜矿','240','传送带','高纯 Mk.2，已吃满','aluminum'],['硫矿','硫 100','传送带','高纯 Mk.2，余 140','aluminum'],['水系统','入口 860 / 外补 480','管道','回流水 380','aluminum']],chain:[
  line('A · 氧化铝','Sloppy Alumina','替代：Sloppy Alumina','铝土 600 + 水 600','氧化铝溶液 720',icons.aluminum),
  line('B · 碎铝块','Aluminum Scrap','默认：Aluminum Scrap','溶液 640 + 煤 320','碎铝块 960 + 副产水 320',icons.coal),
  line('C · 铝锭','纯铝锭','替代：Pure Aluminum Ingot','碎铝块 960','铝锭 480',icons.aluminum),
  line('D · 铜锭水洗','Pure Copper Ingot','替代：Pure Copper Ingot','铜矿 240 + 水 160','铜锭 600',icons.aluminum),
  line('E · 铝材','铝制外壳 ×2','替代：Alclad Casing','铝锭 300 + 铜锭 150','铝制外壳 225',icons.aluminum),
  line('F · 铝材','复合铝板 ×6','默认：Alclad Aluminum Sheet','铝锭 180 + 铜锭 60','复合铝板 180',icons.aluminum),
  line('G · 电池','硫酸与电池','默认：Sulfuric Acid；默认：Battery','氧化铝溶液 80 + 硫酸 100 + 铝壳 40','电池 40 + 副产水 60',icons.nitrogen)
 ],outputs:[['电子厂','铝制外壳 90','铁路','electronics'],['铝材仓库','铝壳 95 + 铝板 180 + 电池 40','仓储/无人机','storage']]},
 {id:'starter',tag:'BASE',name:'早期基础件基地',pos:'mark-starter',icon:icons.starter,products:['铁板 20','铁棒 15','螺丝 40','加强铁板 10','模块化框架 2','转子 4','智能镀板 2','电线 30','电缆 15','铜板 10'],summary:'早期铁基础、转子、智能镀板、铜基础和模块化框架。',inputs:[['3 个高纯铁矿','铁矿 629/2','传送带','Mk.1 100%；总余 91/2','starter'],['高纯铜矿','铜矿 50','传送带','Mk.1 100%；余 70','starter']],chain:[
  line('A · 铁基础','铁板、铁棒、螺丝、加强铁板','默认：Iron Plate / Iron Rod / Screw / Reinforced Iron Plate','铁矿 115','铁板 20 + 铁棒 15 + 螺丝 40 + 加强铁板 5',icons.starter),
  line('B · 转子与镀板','转子与智能镀板','默认：Rotor / Smart Plating','铁矿 183/2','转子 4 + 智能镀板 2',icons.starter),
  line('C · 铜基础','电线、电缆、铜板','默认：Wire / Cable / Copper Sheet','铜矿 50','电线 30 + 电缆 15 + 铜板 10',icons.starter),
  line('D · 框架线','模块化框架','默认：Modular Frame','铁矿 108','模块化框架 2 + 加强铁板 5',icons.starter)
 ],outputs:[['主基地仓储','全部基础件净产','传送带','storage']]},
 {id:'nitrogen',tag:'N2',name:'氮气与冷却系统站',pos:'mark-nitrogen',icon:icons.nitrogen,products:['冷却系统（规划）'],summary:'铁路终端已建；氮气流量与机器数待补充，未计入 V13 实际平衡。',inputs:[['铝厂','铝制外壳（待定）','铁路','规划供货','aluminum'],['石油区','橡胶（待定）','铁路','规划供货','oil'],['氮气井','流量待确认','管道','矿机参数待补','nitrogen']],chain:[line('规划 · 冷却系统','冷却系统','配方待确认','氮气 + 铝壳 + 橡胶 + 水','产量待规划',icons.nitrogen)],outputs:[['站内仓储','冷却系统（待建）','铁路终端','storage']]}
];
const byId=id=>factories.find(f=>f.id===id);
