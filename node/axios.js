import axios from "axios";

const get = async () => {
  const data = await axios('http://ip-api.com/json/?fields=status,message,country,regionName,city,zip,isp,reverse,query&lang=zh-CN')
  console.log('realIp', data.data)
}

get()