export default (Vue)=>{
  export default (Vue)=>{
    // ȫ��ָ������
    Vue.directive("fileUpload",(el, binding, vnode, oldVnode)=>{
     	//el����ǰָ������λ�õĽڵ����  button
    	var data=binding.value;//�õ�������������Ĳ���
     	//1.����input file �ļ��ϴ���
     	 createNode(data) 
     	 function createNode(data) {
            // �����ڵ�
            //<input type="file" multiple/> 
            var node = document.createElement("input");
            node.type = "file";
             //�����ϴ����ͱػ�
            node.accept = " image/jpeg, image/png, image/jpg";
             //�����Ƿ�����ϴ� false
            node.multiple = data.multiple ? "multiple" : "";
            node.style.display = "none";
            // �ѵ�ǰ����file input�ڵ���� ���� ָ��ڵ�֮��
            el.prepend(node);
             //���� button�ڵ����� input_file��onclick����,�Զ������ļ��ϴ���
            el.onclick = function() {
              el.children[0].click();
            }
          }
     	  //��һ����
     	  //��file�ļ������ݷ����仯
     		//ѡ�� button>input_file��
     	   var inputFile = el.children[0];
     
     	inputFile.onchange = function(event) {
                //���û��ϴ�ͼƬ��,�õ��¼�����
            var event = event || window.event;
               // ���¼���������ȥ��  file�ļ�����
            var file=event.target.files[0]
            
            //ȥ���õ�ǰ���������� 
            var fn=data.fn; //fileUpload
            //vnode.context.fileUpload(window.URL.createObjectURL(file))
            vnode.context[fn](window.URL.createObjectURL(file))
          }
     
     })
}
}
