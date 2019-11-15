var SystemMenu = [{
	title: '内容管理',
	icon: '&#xe63f;',
	isCurrent: true,
	menu: [{
		title: '栏目管理',
		icon: '&#xe620;',
		isCurrent: true,
		children: [
			{
				title: '内容统计',
				href: 'workbench.html',
				isCurrent: true
			},
			{
			title: '栏目列表',
			href: 'pages/content/cell/list.html',
	
		}]
	},{
		title: '分类管理',
		icon: '&#xe625;',
		children: [
			{
				title: '分类查询',
				href: 'pages/content/catogory/list.html'
			},
			{
				title: '分类添加',
				href: 'pages/content/catogory/add.html'
			}
		]
	},{
		title: '商品管理',
		icon: '&#xe62f;',
		children: [{
			title: '商品查询',
			href: 'pages/content/item/list.html'
		},{
			title: '添加商品',
			href: 'pages/content/item/add.html'
		}]
	},{
		title: '订单管理',
		icon: '&#xe647;',
		children: [{
			title: '供应商管理',
			href: 'providers.html'
		},{
			title: '进货渠道',
			href: 'providers1.html'
		},{
			title: '自定义',
			href: 'basic_info.html'
		}]
	}]
},{
	title: '系统管理',
	icon: '&#xe60d;',
	menu: [{
		title: '用户管理',
		icon: '&#xe647;',
		children: [{
			title: '公司领导管理',
			href: 'index.html',
			isCurrent: true
		},{
			title: '企业荣誉',
			href: 'index.html'
		},{
			title: '组织架构',
			href: 'index.html'
		},{
			title: '自定义',
			href: 'index.html'
		}]
	},{
		title: '角色管理',
		icon: '&#xe611;',
		children: [{
			title: '权限设置',
			href: 'process.html'
		},{
			title: '角色设置',
			href: 'process.html'
		},{
			title: '职务设置',
			href: 'process.html'
		},{
			title: '自定义',
			href: 'process.html'
		},{
			title: '采购组',
			href: 'process.html'
		}]
	},{
		title: '权限管理',
		icon: '&#xe62f;',
		children: [{
			title: '专家管理',
			href: 'process.html'
		},{
			title: '添加专家',
			href: 'process.html'
		},{
			title: '审核专家',
			href: 'process.html'
		}]
	}]
},{
	title: '主数据',
	icon: '&#xe61e;',
	menu: [{
		title: '数据信息',
		icon: '&#xe647;',
		isCurrent: true,
		children: [{
			title: '数据管理',
			href: 'process.html',
			isCurrent: true
		},{
			title: '企业荣誉',
			href: 'index.html'
		},{
			title: '组织架构',
			href: 'index.html'
		},{
			title: '自定义',
			href: 'index.html'
		}]
	},{
		title: '数据表',
		icon: '&#xe611;',
		href: 'basic_info.html',
		children: []
	}]
},{
	title: '供应商管理',
	icon: '&#xe620;',
	menu: [{
		title: '供应商列表',
		icon: '&#xe647;',
		children: [{
			title: '供应链条',
			href: 'providers.html',
			isCurrent: true
		},{
			title: '供应组织',
			href: 'index.html'
		},{
			title: '运输渠道',
			href: 'index.html'
		},{
			title: '自定义',
			href: 'index.html'
		}]
	},{
		title: '供应客户',
		icon: '&#xe611;',
		href: 'basic_info.html',
		children: []
	}]
},{
	title: '采购商开发',
	icon: '&#xe625;',
	menu: [{
		title: '采购商主页',
		icon: '&#xe647;',
		children: [{
			title: '采购管理',
			href: 'providers1.html',
			isCurrent: true
		},{
			title: '采购列表',
			href: 'index.html'
		}]
	},{
		title: '数据表',
		icon: '&#xe611;',
		href: 'basic_info.html',
		children: []
	}]
}];