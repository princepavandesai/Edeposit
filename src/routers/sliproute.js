const Deposit=require('../models/deposit')
const express=require('express')
const router=new express.Router()

router.get('/',(req, res)=>{
    res.render('home',{
        bankname:'Welcome To',
        branchname:'BROADWAY BANK',
        bankid:'1234567890'
    })
})
router.get('/test',(req, res)=>{
    res.render('sample',{
        bankname:'Welcome To',
        branchname:'BROADWAY BANK',
        bankid:'1234567890'
    })
})
router.get('/index',(req, res)=>{
    res.render('index',{
        bankname:'BROADWAY BANK',
        branchname:'New York Branch',
        bankid:'1234567890'
    })
    
})
router.post('/deposit', async(req, res)=>{
    
    if(req.body.Cash_Deposit=='') {req.body.Cash_Deposit=0}
    if(req.body.Check_Deposit=='') {req.body.Check_Deposit=0}
    if(req.body.Cash_back=='') {req.body.Cash_back=0}

    const d=new Deposit({...req.body})
    
    try{
        await d.save()
        res.status(201).redirect('/')//send(d)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.get('/alldeposits', async(req, res)=>{
    try
    {
        const d1= await Deposit.find()
        if(!d1)
        {
            return res.status(400).send()
        }
        res.send(d1)
    }
    catch(e){
        res.status(500).send(e)
    }
    
})

router.get('/updatedeposit', async(req, res)=>{
    res.render('modify',{
        bankname:'BROADWAY BANK',
        branchname:'New York Branch',
        bankid:'1234567890'
    })
})

router.post('/updated', async(req, res)=>{
    //const allowedTaskupdates= ['Trans_type','Cust_name','Acct_number','Cash_Deposit','Check_Deposit','Subtotal','Cash_back','Total']
    const updateTask= Object.keys(req.body)
    //const IsallowedTaskUpdates= updateTask.every((update) => allowedTaskupdates.includes(update))
    
    if(updateTask.length===0)
    {
        return res.status(400).send({error:'Input is missing'})
    }
    try{
        console.log(req.body.ID)
        const d2 = await Deposit.findOne({_id:req.body.ID})
        //const task = await Task.findById(req.params.id)     

        if(!d2){
            return res.status(404).send()
        }
        updateTask.forEach((update) => d2[update]=req.body[update] )
        await d2.save()
        res.send(d2)

    }catch(e){
        res.status(400).send(e)
    }
    
})

module.exports=router