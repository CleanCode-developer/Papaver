using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
   private float Horizontal;
    private float Vertical;
   
private float Speed= 5;
    // Start is called before the first frame update
    void Start()
    {
  
      
    }
    // Update is called once per frame
    void Update()
    {
         Horizontal = Input.GetAxis("Horizontal");
         Vertical = Input.GetAxis("Vertical");
         transform.Translate(Vector3.forward * Time.deltaTime * Speed * Horizontal);
         transform.Translate(-Vector3.right * Time.deltaTime * Speed * Vertical);
}
}
