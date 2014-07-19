

    function create_tvcucina() {
       
        var appoggio = createMesh_simple(new THREE.BoxGeometry(4,.5,8),"wood_kitchen.jpg");
        var tv = get_obj("tv.obj","tv.mtl");     
        tv.scale.set(2,2,1.5);

        var obj_tv = new THREE.Object3D();
        obj_tv.add(tv);

        obj_tv.position.y = .2;
        obj_tv.rotation.y = -(Math.PI*5)/8;

        var completo = new THREE.Object3D();
        completo.add(appoggio);
        completo.add(obj_tv);

        completo.appoggio = appoggio;
        completo.obj_tv = obj_tv;

        return completo;
    }
