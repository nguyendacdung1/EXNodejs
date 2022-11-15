const express = require('express')
const app = express()
const port = 3000
const  engine =  require('express-handlebars');
const { url } = require('inspector');
const hbs = engine.create({
	extName: ".hbs",
	layoutsDir: "views/layouts/",
	defaultLayout: "main.hbs",
})

app.use(express.static('./public'))

const holidays = [
	{
		name : 'Trung Thu',
		content: "Tết Trung thu bắt nguồn từ văn hóa Trung Quốc. Có ba truyền thuyết chính được người ta biết đến nhiều nhất để nói về Trung thu đó là Hằng Nga và Hậu Nghệ, vua Đường Minh Hoàng lên cung trăng, và chú Cuội trong cổ tích Việt Nam.",
		img: '/img/trunthu.png',
		url: 'trungthu'
	},
	{
		name : 'Tet',
		content: "Tết Nguyên Đán (Spring Festival or Lunar New Year) ",
		img: '/img/Tet.png',
		url: 'tet'
	},
	{
		name : 'Noel',
		content: "Không khí se se lạnh của mùa đông, báo hiệu một mùa Noel nữa đã đến cận kề, không khí Noel ngập tràn, lan tỏa khắp ngóc ngách, ngõ phố làm ai ai cũng nôn nao.",
		img: '/img/noel.png',
		url: 'noel'
	}

]
app.get('/main',(req,res) => {
	const data ={
		title : 'holiday',
		holidays 
	}


	res.render('index',data)

	
})

app.get('/:holiday',(req,res)=>{
	let holidayName = req.params.holiday
	let data = holidays.find(holiday=>holiday.url == holidayName)
	res.render('holiday',data)
})


app.engine(".hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "./views")



app.listen(port, () => console.log(`Example app listening on port ${port}!`))