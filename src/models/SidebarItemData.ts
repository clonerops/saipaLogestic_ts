export interface SidebarItemDataModel {
    data: [
        {
            menuno: string,
            menu_order: number,
            menuname: string,
            menu_url: string,
            icon_css: string,
            parent: string,
            children?: [
                {
                    menuno: string,
                    menu_order: number,
                    menuname: string,
                    menu_url: string,
                    icon_css: string,
                    parent: string,
                    children?: [
                        {
                            menuno: string,
                            menu_order: number,
                            menuname: string,
                            menu_url: string,
                            icon_css: string,
                            parent: string,
                        }
                    ]
                }
            ]
        }
    ]
}