# Test3 - SHP 文件可视化

## 项目简介
该项目使用 Jupyter Notebook 读取当前目录下的 3 个 `.shp` 文件，并以 3 行 1 列子图形式可视化。

## 当前数据
目录中包含三组区域边界数据（以及对应的 `.dbf/.prj/.shx` 等配套文件）：
- `IPCC-WGI-reference-regions-v4.*`
- `IPCC_regions.*`
- `IPCC_WGII_continental_regions.*`

## Notebook 行为
- 文件：`plot_shp.ipynb`
- 自动扫描当前工作目录中的 `.shp` 文件
- 要求恰好 3 个 `.shp` 文件，否则抛出异常
- 使用 `GeoPandas` 绘图并标注子图标签 `a/b/c`

## 依赖
- Python 3.x
- geopandas
- matplotlib

示例安装：
```bash
pip install geopandas matplotlib
```

## 运行方式
1. 在 `Test3` 目录启动 Jupyter：
   - `jupyter notebook`
2. 打开 `plot_shp.ipynb`
3. 运行单元格生成图像

## 文件结构
```text
Test3/
  plot_shp.ipynb
  *.shp / *.dbf / *.prj / *.shx / ...
  README.md
```

